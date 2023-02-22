import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../../utils/utils'

import { ErrorAlert } from '../../ErrorAlert'
import { ButtonDelete } from '../../ButtonDelete'
import { PaginateNavbar } from '../../PaginateNavbar'

import { DELETE_MONTHLY_BALANCE } from '../../../gql/mutations/monthlyBalances'

export const ListOfMonthlyBalances = ( { monthlyBalances, paginationData, refetch, onChangePage } ) => {

	const [ deleteMonthlyBalance ] = useMutation(DELETE_MONTHLY_BALANCE)

	const onDeleteMonthlyBalance = () => {
		const isUniqueResultOnCurrentPage = monthlyBalances.length === 1
		const isNotFirstPage = paginationData.currentPage !== 1
		const isLastPage = paginationData.currentPage === paginationData.totalPages

		const isNecessaryRequestThePreviousPage = isUniqueResultOnCurrentPage && isNotFirstPage && isLastPage

		if (!isNecessaryRequestThePreviousPage) {
			refetch()
		} else {
			const previousPage = paginationData.currentPage - 1
			onChangePage(previousPage)
		}
	}

	if (monthlyBalances.length) {
		return (
			<section className="table-responsive">
				<table className="table table-dark table-hover">
					<thead>
						<tr className="table-info text-dark">
							<th scope="col">Date</th>
							<th scope="col">Balance</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							monthlyBalances.map(monthlyBalance => {
								return (
									<tr key={monthlyBalance.uuid}>
										<td>{parseUnixTimestamp(monthlyBalance.date).substring(0, 10)}</td>
										<td>{monthlyBalance.balance} {monthlyBalance.currencyISO}</td>
										<td>
											<ButtonDelete uuid={monthlyBalance.uuid} deleteMutation={deleteMonthlyBalance} onDelete={onDeleteMonthlyBalance} />
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


ListOfMonthlyBalances.propTypes = {
	monthlyBalances: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			balance: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	),
	paginationData: PropTypes.shape({
		currentPage: PropTypes.number.isRequired,
		totalPages: PropTypes.number.isRequired,
	}),
	refetch: PropTypes.func.isRequired,
	onChangePage: PropTypes.func.isRequired
}
