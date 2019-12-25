import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { parseUnixTimestamp } from '../../utils/utils'

import { ErrorAlert } from '../ErrorAlert'

export const GraphMonthlyBalance = ({data}) => {	
	const dataForGraph = [];
	data.map((monthlyBalance, index) => {
		return dataForGraph[index] = {
			balance: monthlyBalance.balance,
			date: parseUnixTimestamp(monthlyBalance.date).substring(0, 10)
		};
	});

	if (dataForGraph.length) {
		return (
			<div style={{ width: '100%', height: 460 }}>
				<ResponsiveContainer>
					<LineChart
						data={dataForGraph}
						margin={{top: 5, right: 20, left: 20, bottom: 5}}
					>
						<CartesianGrid strokeDasharray="3 3"/>
						<XAxis dataKey="date"/>
						<YAxis/>
						<Tooltip/>
						<Line dataKey="balance" fill="#8884d8"/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	} else {
		const errorMessage = 'Insufficient data to generate statistics';
		return <ErrorAlert errorMessage={errorMessage} />;
	}
}

GraphMonthlyBalance.propTypes = {
	data: PropTypes.array.isRequired,
}