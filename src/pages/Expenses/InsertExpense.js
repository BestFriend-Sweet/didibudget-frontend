import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'
import { GetExpenseCategory } from '../../components/Expenses/GetExpenseCategory'

const InsertExpense = (props) => {
	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<GetExpenseCategory props={props}/>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
