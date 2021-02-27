import React, { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetExpensesForAnalysis } from '../../components/Expenses/GetExpensesForAnalysis'

const ExpenseAnalysis = () => {
	return (
		<Fragment>
			<PageTitle text='Expenses analysis panel' />
			<GetExpensesForAnalysis />
		</Fragment>
	)
}

ExpenseAnalysis.displayName = 'ExpenseAnalysis'

export default ExpenseAnalysis
