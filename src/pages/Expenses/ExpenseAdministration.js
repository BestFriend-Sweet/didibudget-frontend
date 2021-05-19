import React, { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfExpenses } from '../../components/Expenses/GetListOfExpenses'

const ExpenseAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Expenses list' />
			<GetListOfExpenses />
		</Fragment>
	)
}

ExpenseAdministration.displayName = 'ExpenseAdministration'

export default ExpenseAdministration
