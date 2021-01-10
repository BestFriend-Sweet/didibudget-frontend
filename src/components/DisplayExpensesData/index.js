import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

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
				<PageSubTitle text="All data is displayed:"/>
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