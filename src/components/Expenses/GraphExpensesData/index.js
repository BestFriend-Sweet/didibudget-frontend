import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'

import { parseUnixTimestamp } from '../../../utils/utils'
import { getSumPerMonth, getLastTwelveValuesFromArrayIfTheyExist } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'
import { PageSubTitle } from '../../PageSubTitle'
import { AveragePerMonth } from '../AveragePerMonth'


export const GraphExpensesData = ({ data }) => {	

	const dataParsed = data.map((expense) => {
		return {
			...expense,
			date: parseUnixTimestamp(expense.date).substring(0, 10)
		}
	})

	const dataGroupedPerMonth = getSumPerMonth(dataParsed)
	const dataGroupedPerMonthLastYear = getLastTwelveValuesFromArrayIfTheyExist(dataGroupedPerMonth)

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

				<AveragePerMonth data={dataParsed} />
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