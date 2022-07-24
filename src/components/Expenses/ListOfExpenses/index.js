import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../../utils/utils'
import { getNameOfCategoryOrSubcategory } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'
import { ButtonDelete } from '../../ButtonDelete'
import { PaginateNavbar } from '../../PaginateNavbar'

import { DELETE_EXPENSE } from '../../../gql/mutations/expenses'

export const ListOfExpenses = ( { expenses, paginationData, categories, refetch, onChangePage } ) => {

	const [ deleteExpense ] = useMutation(DELETE_EXPENSE)

	const onDeleteExpense = () => {
		const isLastResultOnPage = expenses.length === 1
		const isNotLastPage = paginationData.totalPages > 1
		const isNecessaryRequestThePreviousPage = isLastResultOnPage && isNotLastPage

		if (!isNecessaryRequestThePreviousPage) {
			refetch()
		} else {
			const previousPage = paginationData.currentPage - 1
			onChangePage(previousPage)
		}
	}

	if (expenses.length) {
		return (
			<section className="table-responsive">
				<table className="table table-dark table-hover">
					<thead>
						<tr className="table-info text-dark">
							<th scope="col">Date</th>
							<th scope="col">Category & subcategory</th>
							<th scope="col">Quantity</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							expenses.map(expense => {
								const nameOfCategory = getNameOfCategoryOrSubcategory(expense.category, categories)
								const nameOfSubcategory = getNameOfCategoryOrSubcategory(expense.subcategory, categories)
								return (
									<tr key={expense.uuid}>
										<td>{parseUnixTimestamp(expense.date).substring(0, 10)}</td>
										<td>{nameOfCategory}{(nameOfSubcategory) ? ` - ${nameOfSubcategory}` : ''}</td>
										<td>{expense.quantity} {expense.currencyISO}</td>
										<td>
											<ButtonDelete uuid={expense.uuid} deleteMutation={deleteExpense} onDelete={onDeleteExpense} />
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>

				<PaginateNavbar currentPage={paginationData.currentPage} totalPages={paginationData.totalPages} onChangePage={onChangePage} />
			</section>
		)
	} else {
		const errorMessage = 'Not enough data to generate list'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}


ListOfExpenses.propTypes = {
	expenses: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			subcategory: PropTypes.string,
			quantity: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	),
	paginationData: PropTypes.shape({
		currentPage: PropTypes.number.isRequired,
		totalPages: PropTypes.number.isRequired,
	}),
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.arrayOf(
				PropTypes.shape({
					_id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					uuid: PropTypes.string.isRequired
				})
			),
			uuid: PropTypes.string.isRequired
		})
	),
	refetch: PropTypes.func.isRequired,
	onChangePage: PropTypes.func.isRequired
}
