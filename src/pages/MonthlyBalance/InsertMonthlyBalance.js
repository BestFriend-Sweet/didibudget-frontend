import React, { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'
import { RegisterMonthlyBalanceForm } from '../../components/MonthlyBalance/RegisterMonthlyBalanceForm'


const InsertMonthlyBalance = () => {
	return (
		<Fragment>
			<PageTitle text='Register monthly balance' />
			<RegisterMonthlyBalanceForm />
		</Fragment>
	)
}

InsertMonthlyBalance.displayName = 'InsertMonthlyBalance'

export default InsertMonthlyBalance
