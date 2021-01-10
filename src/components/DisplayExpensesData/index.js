import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { parseUnixTimestamp } from '../../utils/utils'

import { ErrorAlert } from '../ErrorAlert'
import { PageSubTitle } from '../PageSubTitle'


export const DisplayExpensesData = ({data}) => {	


	const dataParsed = []
	data.map((expense, index) => {
		return dataParsed[index] = {
			...expense,
			date: parseUnixTimestamp(expense.date).substring(0, 10)
		}
	})

	console.log(dataParsed)

	if (dataParsed.length) {
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