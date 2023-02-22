import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfMonthlyBalances } from '../../components/MonthlyBalance/GetListOfMonthlyBalances'

const MonthlyBalanceAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Monthly balance list' />
			<GetListOfMonthlyBalances />
		</Fragment>
	)
}

MonthlyBalanceAdministration.displayName = 'MonthlyBalanceAdministration'

export default MonthlyBalanceAdministration
