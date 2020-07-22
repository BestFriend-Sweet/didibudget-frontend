import React from 'react'
import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../utils/utils'

import { ErrorAlert } from '../ErrorAlert'
import { ButtonDelete } from '../ButtonDelete'


import { DELETE_MONTHLY_BALANCE } from '../../gql/mutations/monthlyBalance'

export const ListOfMonthlyBalance = ( { monthlyBalance, refetch } ) => {

	const [ deleteMonthlyBalance ] = useMutation(DELETE_MONTHLY_BALANCE);

	const monthlyBalanceReversed = monthlyBalance.slice(0).reverse()

	if (monthlyBalanceReversed.length) {

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
											<ButtonDelete uuid={monthlyBalance.uuid} deleteMutation={deleteMonthlyBalance}onDelete={refetch} />
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


ListOfMonthlyBalance.propTypes = {
	monthlyBalance: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			balance: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	),
	refetch: PropTypes.func.isRequired
}
