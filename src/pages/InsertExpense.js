import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'

const InsertExpense = (props) => {

	let subcategoryID = props["*"];

	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<p>{props.categoryID}</p>
			<p>{subcategoryID}</p>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
