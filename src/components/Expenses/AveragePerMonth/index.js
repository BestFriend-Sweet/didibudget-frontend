import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { getAveragePerMonth, averageOfLast } from '../utils'

import { PageSubTitle } from '../../PageSubTitle'

export const AveragePerMonth = ({ data }) => {
	const averagePerMonthExceptSecondLast = getAveragePerMonth(data)

	const lastThreeMonths = averageOfLast(averagePerMonthExceptSecondLast, 3)
	const lastSixMonths = averageOfLast(averagePerMonthExceptSecondLast, 6)
	const lastTwelveMonths = averageOfLast(averagePerMonthExceptSecondLast, 12)

	if (!!lastThreeMonths || !!lastSixMonths || !!lastTwelveMonths) {
		return (
			<Fragment>
				<PageSubTitle text="Average expenses:"/>
			{
				!!lastThreeMonths && <p className="font-weight-light text-light">
					The average expense for the <strong>last 3 months</strong> (excluding the current month) has been <span className="text-nowrap">{lastThreeMonths} €.</span>
				</p>
			}
			{
				!!lastSixMonths && <p className="font-weight-light text-light">
					The average expense for the <strong>last 6 months</strong> (excluding the current month) has been <span className="text-nowrap">{lastSixMonths} €.</span>
				</p>
			}
			{
				!!lastTwelveMonths && <p className="font-weight-light text-light">
					The average expense for the <strong>last 12 months</strong> (excluding the current month) has been <span className="text-nowrap">{lastTwelveMonths} €.</span>
				</p>
			}
			</Fragment>
		)
	}

}

AveragePerMonth.propTypes = {
	data: PropTypes.array.isRequired,
}
