import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { PageTitle } from '../../components/PageTitle'
import { GetExpenseCategory } from '../../components/Expenses/GetExpenseCategory'
import { getFirstParamFromSplat } from '../../utils/utils'

const InsertExpense = () => {
	const { categoryID, '*': splat } = useParams()
	const subcategoryID = getFirstParamFromSplat(splat)

	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<GetExpenseCategory categoryID={categoryID} subcategoryID={subcategoryID}/>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
