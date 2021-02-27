import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'

import { GetListOfExpenses } from '../components/Expenses/GetListOfExpenses'

const ExpenseAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Expenses administration panel' />
			<GetListOfExpenses />
		</Fragment>
	)
}

ExpenseAdministration.displayName = 'ExpenseAdministration'

export default ExpenseAdministration
