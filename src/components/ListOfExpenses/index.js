import React from 'react'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../utils/utils'
import { getNameOFCategoryOrSubcategory } from './utils'

//import { DeleteExpense } from '../../containers/DeleteExpense'

import { ButtonDelete } from '../ButtonDelete'

import { ErrorAlert } from '../ErrorAlert'

import { useMutation } from '@apollo/client'

import { DELETE_EXPENSE } from '../../gql/mutations/expenses'

export const ListOfExpenses = ( { expenses, categories, refetch } ) => {

	const expensesReversed = expenses.slice(0).reverse()
	const [ deleteExpense, { data, loading, error } ] = useMutation(DELETE_EXPENSE);

	if (expensesReversed.length) {

		return (
			<section className="table-responsive">
				<table className="table text-light">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Category & subcategory</th>
							<th scope="col">Quantity</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							expensesReversed.map(expense => {
								const nameOfCategory = getNameOFCategoryOrSubcategory(expense.category, categories);
								const nameOfSubcategory = getNameOFCategoryOrSubcategory(expense.subcategory, categories);
								return (
									<tr key={expense.uuid}>
										<td>{parseUnixTimestamp(expense.date).substring(0, 10)}</td>
										<td>{nameOfCategory}{(nameOfSubcategory) ? ` - ${nameOfSubcategory}` : ''}</td>
										<td>{expense.quantity} {expense.currencyISO}</td>
										<td>
											{
												(deleteExpense, { data, loading, error }) => { // eslint-disable-line no-unused-vars
													const deleteRegistry = (uuid) => {
														const variables = { uuid: uuid };
														deleteExpense({ variables }).then(( {data} ) => {
															refetch();
														}).catch(e => {
															console.error(e.message) // eslint-disable-line no-console
														})
													}

													return <ButtonDelete disabled={loading} uuid={expense.uuid} deleteRegistry={deleteRegistry} text={'Delete'} className={'d-block d-md-inline-block mr-2'} />
												}
											}
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</section>
		)
	} else {
		const errorMessage = 'Not enough data to generate list';
		return <ErrorAlert errorMessage={errorMessage} />;
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
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.array.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
