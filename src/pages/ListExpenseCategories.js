import React, { Fragment } from 'react'

import { PageTitle } from '../components/PageTitle'

import { GetListOfExpenseCategories } from '../containers/GetListOfExpenseCategories'

const ListExpenseCategories = () => {
	return (
		<Fragment>
			<PageTitle text='List of expense categories' />
			<GetListOfExpenseCategories />
		</Fragment>
	)
}

ListExpenseCategories.displayName = 'ListExpenseCategories'

export default ListExpenseCategories
