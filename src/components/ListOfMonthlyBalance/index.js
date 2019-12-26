import React from 'react'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../utils/utils'

export const ListOfMonthlyBalance = ( { monthlyBalance } ) => {
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
						monthlyBalance.reverse().map(monthlyBalance => {
							return (
								<tr key={monthlyBalance.uuid}>
									<td>{parseUnixTimestamp(monthlyBalance.date).substring(0, 10)}</td>
									<td>{monthlyBalance.balance}</td>
									<td></td>
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
