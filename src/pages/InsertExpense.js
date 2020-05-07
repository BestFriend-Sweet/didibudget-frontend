import React, { Fragment } from 'react'

import { RegisterExpense } from '../containers/RegisterExpense'

import { PageTitle } from '../components/PageTitle'
import { RegisterExpenseForm } from '../components/RegisterExpenseForm'

const InsertExpense = (props) => {

	const subcategoryID = props["*"] || null

	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<RegisterExpense>
				{
					(registerExpense, { data, loading, error }) => { // eslint-disable-line no-unused-vars
						const onSubmit = ({ quantity, date }) => {
							const variables = { category: props.categoryID, subcategory: subcategoryID, quantity: parseFloat(quantity), date };
							registerExpense({ variables }).then(({ data }) => {
								window.location.href = '/expenses-administration'
							}).catch(e => {
								console.error(e.message) // eslint-disable-line no-console
							})
						}

						const errorMsg = error && 'Data provided is not valid'

						return <RegisterExpenseForm disabled={loading} error={errorMsg} onSubmit={onSubmit} />
					}
				}
			</RegisterExpense>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
