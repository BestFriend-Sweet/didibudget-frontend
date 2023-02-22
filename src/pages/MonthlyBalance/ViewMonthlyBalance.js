import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'
import { GetGraphMonthlyBalances } from '../../components/MonthlyBalance/GetGraphMonthlyBalances'

const ViewMonthlyBalance = () => {
	return (
		<Fragment>
			<PageTitle text='View monthly balance' />
			<GetGraphMonthlyBalances />
		</Fragment>
	)
}

ViewMonthlyBalance.displayName = 'ViewMonthlyBalance'

export default ViewMonthlyBalance
