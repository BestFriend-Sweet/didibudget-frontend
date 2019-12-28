import React from 'react'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../utils/utils'

import { DeleteMonthlyBalance } from '../../containers/DeleteMonthlyBalance'

import { ButtonDeleteMonthlyBalance } from '../ButtonDeleteMonthlyBalance'

export const ListOfMonthlyBalance = ( { monthlyBalance, refetch } ) => {
	const monthlyBalanceReversed = monthlyBalance.slice(0).reverse()
	return (
		<section className="table-responsive">
			<table className="table text-light">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Balance</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						monthlyBalanceReversed.map(monthlyBalance => {
							return (
								<tr key={monthlyBalance.uuid}>
									<td>{parseUnixTimestamp(monthlyBalance.date).substring(0, 10)}</td>
									<td>{monthlyBalance.balance}</td>
									<td>
										<DeleteMonthlyBalance>
											{
												(deleteMonthlyBalance, { data, loading, error }) => { // eslint-disable-line no-unused-vars
													const deleteA = (uuid) => {
														const variables = { uuid: uuid };
														deleteMonthlyBalance({ variables }).then(( {data} ) => {
															refetch();
														}).catch(e => {
															console.error(e.message) // eslint-disable-line no-console
														})
													}

													return <ButtonDeleteMonthlyBalance disabled={loading} uuid={monthlyBalance.uuid} deleteFunc={deleteA} />
												}
											}
										</DeleteMonthlyBalance>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</section>
	)
}


ListOfMonthlyBalance.propTypes = {
	monthlyBalance: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			balance: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	)
}
