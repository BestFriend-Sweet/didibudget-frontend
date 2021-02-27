import React, { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'
import { RegisterExpenseForm } from '../../components/Expenses/RegisterExpenseForm'

const InsertExpense = (props) => {
	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<RegisterExpenseForm props={props}/>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
