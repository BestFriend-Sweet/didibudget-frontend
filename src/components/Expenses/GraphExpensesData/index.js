import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'

import { parseUnixTimestamp } from '../../../utils/utils'
import { getSumPerMonth, getAveragePerMonth, averageOfLast, getLastTwelveValuesFromArrayIfTheyExist } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'
import { PageSubTitle } from '../../PageSubTitle'


export const GraphExpensesData = ({data}) => {	

	const dataParsed = data.map((expense, index) => {
		return {
			...expense,
			date: parseUnixTimestamp(expense.date).substring(0, 10)
		}
	})

	const dataGroupedPerMonth = getSumPerMonth(dataParsed)
	const dataGroupedPerMonthLastYear = getLastTwelveValuesFromArrayIfTheyExist(dataGroupedPerMonth)

	const averagePerMonthExceptSecondLast = getAveragePerMonth(dataParsed)
	const lastThreeMonths = averageOfLast(averagePerMonthExceptSecondLast, 3)
	const lastSixMonths = averageOfLast(averagePerMonthExceptSecondLast, 6)
	const lastTwelveMonths = averageOfLast(averagePerMonthExceptSecondLast, 12)

	if (dataGroupedPerMonth.length) {
		return (
			<Fragment>
				<PageSubTitle text="Total expenses per month:"/>
				<div style={{ width: '100%', height: 460 }}>
					<ResponsiveContainer>
						<BarChart
							data={dataGroupedPerMonth}
							margin={{top: 5, right: 20, left: 20, bottom: 20}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="label" />
							<YAxis />
							<Tooltip />
							<Bar dataKey="sum" fill="#3182BD" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				{
					dataGroupedPerMonthLastYear.length  > 0 &&
					<Fragment>
						<PageSubTitle text="Total expenses for the last 12 months:"/>
						<div style={{ width: '100%', height: 460 }}>
							<ResponsiveContainer>
								<BarChart
									data={dataGroupedPerMonthLastYear}
									margin={{top: 5, right: 20, left: 20, bottom: 20}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="label" />
									<YAxis />
									<Tooltip />
									<Bar dataKey="sum" fill="#3182BD" />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</Fragment>
				}

				{
					(!!lastSixMonths || !!lastTwelveMonths) && <PageSubTitle text="Average expenses:"/>
				}
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
	} else {
		const errorMessage = 'Not enough data to generate statistics'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}

GraphExpensesData.propTypes = {
	data: PropTypes.array.isRequired,
}