import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


import { ErrorAlert } from '../ErrorAlert'
import { PageSubTitle } from '../PageSubTitle'


export const DisplayExpensesData = ({data}) => {	

	console.log(data)

	if (data.length) {
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