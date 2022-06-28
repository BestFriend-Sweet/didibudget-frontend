import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfExpensesWithPagination } from '../../components/Expenses/GetListOfExpensesWithPagination'

const ExpenseAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Expenses list' />
			<GetListOfExpensesWithPagination />
		</Fragment>
	)
}

ExpenseAdministration.displayName = 'ExpenseAdministration'

export default ExpenseAdministration
