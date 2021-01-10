import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'

import { parseUnixTimestamp } from '../../utils/utils'
import { getSumPerMonth } from './utils'

import { ErrorAlert } from '../ErrorAlert'
import { PageSubTitle } from '../PageSubTitle'


export const DisplayExpensesData = ({data}) => {	

	const dataParsed = data.map((expense, index) => {
		return {
			...expense,
			date: parseUnixTimestamp(expense.date).substring(0, 10)
		}
	})

	const dataGroupedPerMonth = getSumPerMonth(dataParsed)

	if (dataGroupedPerMonth.length) {
		return (
			<Fragment>
				<PageSubTitle text="Total expenses per month:"/>
				<div style={{ width: '100%', height: 460 }}>
					<ResponsiveContainer>
						<BarChart
							data={dataGroupedPerMonth}
							margin={{top: 5, right: 20, left: 20, bottom: 100}}
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
		)
	} else {
		const errorMessage = 'Not enough data to generate statistics'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}

DisplayExpensesData.propTypes = {
	data: PropTypes.array.isRequired,
}