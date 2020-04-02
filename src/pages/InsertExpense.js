import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'

const InsertExpense = (props) => {

	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<p>{props.categoryOrSubcategoryId}</p>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
