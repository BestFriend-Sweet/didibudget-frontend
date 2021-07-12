import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfExpenseCategories } from '../../components/Expenses/GetListOfExpenseCategories'

const ExpenseCategorySelector = () => {
	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<GetListOfExpenseCategories />
		</Fragment>
	)
}

ExpenseCategorySelector.displayName = 'ExpenseCategorySelector'

export default ExpenseCategorySelector
