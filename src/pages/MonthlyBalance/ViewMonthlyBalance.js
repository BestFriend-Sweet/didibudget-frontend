import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'
import { GetGraphMonthlyBalance } from '../../components/MonthlyBalance/GetGraphMonthlyBalance'

const ViewMonthlyBalance = () => {
	return (
		<Fragment>
			<PageTitle text='View monthly balance' />
			<GetGraphMonthlyBalance />
		</Fragment>
	)
}

ViewMonthlyBalance.displayName = 'ViewMonthlyBalance'

export default ViewMonthlyBalance
