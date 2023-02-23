import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfMonthlyBalancesWithPagination } from '../../components/MonthlyBalance/GetListOfMonthlyBalancesWithPagination'

const MonthlyBalanceAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Monthly balances list' />
			<GetListOfMonthlyBalancesWithPagination />
		</Fragment>
	)
}

MonthlyBalanceAdministration.displayName = 'MonthlyBalanceAdministration'

export default MonthlyBalanceAdministration
