import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'
import { GetMonthlyBalance } from '../containers/GetMonthlyBalance'

const ViewMonthlyBalance = () => {
	return (
		<Fragment>
			<PageTitle text='View monthly balance' />
			<GetMonthlyBalance />
		</Fragment>
	)
}

ViewMonthlyBalance.displayName = 'ViewMonthlyBalance'

export default ViewMonthlyBalance
