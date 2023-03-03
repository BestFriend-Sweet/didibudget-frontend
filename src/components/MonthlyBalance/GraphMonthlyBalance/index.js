import { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

import { parseUnixTimestamp } from '../../../utils/utils'

import { ErrorAlert } from '../../ErrorAlert'
import { PageSubTitle } from '../../PageSubTitle'

import { parseDataForGraph, getLastYearData } from '../utils'


class CustomizedAxisTick extends PureComponent {
	render() {
		const { x, y, payload } = this.props

		return (
			<g transform={`translate(${x},${y})`}>
				<text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">{payload.value}</text>
			</g>
		)
	}
}

export const GraphMonthlyBalance = ({data}) => {	
	const dataForGraph = []
	data.map((monthlyBalance, index) => {
		return dataForGraph[index] = {
			balance: monthlyBalance.balance,
			date: parseUnixTimestamp(monthlyBalance.date).substring(0, 10)
		}
	})

	const allDataParsed = parseDataForGraph(dataForGraph)
	const lastYearDataParsed = getLastYearData(allDataParsed)

	if (allDataParsed.length) {
		return (
			<Fragment>
				<PageSubTitle text="All data is displayed:"/>
				<div style={{ width: '100%', height: 460 }}>
					<ResponsiveContainer>
						<LineChart
							data={allDataParsed}
							margin={{top: 5, right: 20, left: 20, bottom: 100}}
						>
							<CartesianGrid strokeDasharray="3 3"/>
							<XAxis dataKey="date" interval="preserveStartEnd" tick={<CustomizedAxisTick />} />
							<YAxis />
							<Tooltip />
							<Line dataKey="balance" fill="#8884d8" />
						</LineChart>
					</ResponsiveContainer>
				</div>
				{
					lastYearDataParsed.length > 0 &&
					<Fragment>
						<PageSubTitle text="The data of the last 12 records is displayed:"/>
						<div style={{ width: '100%', height: 460 }}>
							<ResponsiveContainer>
								<LineChart
									data={lastYearDataParsed}
									margin={{top: 5, right: 20, left: 20, bottom: 100}}
								>
									<CartesianGrid strokeDasharray="3 3"/>
									<XAxis dataKey="date" interval="preserveStartEnd" tick={<CustomizedAxisTick />} />
									<YAxis />
									<Tooltip />
									<Line dataKey="balance" fill="#8884d8" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</Fragment>
				}
		</Fragment>
		)
	} else {
		const errorMessage = 'Not enough data to generate statistics'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}

GraphMonthlyBalance.propTypes = {
	data: PropTypes.array.isRequired,
}