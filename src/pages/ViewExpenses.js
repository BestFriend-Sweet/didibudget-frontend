import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'
import { GetDataExpenses } from '../components/Expenses/GetDataExpenses'

const ViewExpenses = () => {
	return (
		<Fragment>
			<PageTitle text='View expenses' />
			<GetDataExpenses />
		</Fragment>
	)
}

ViewExpenses.displayName = 'ViewExpenses'

export default ViewExpenses
