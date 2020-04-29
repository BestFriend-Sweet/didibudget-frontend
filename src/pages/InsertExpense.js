import React, { Fragment } from 'react'

import { RegisterExpense } from '../containers/RegisterExpense'

import { PageTitle } from '../components/PageTitle'
import { RegisterExpenseForm } from '../components/RegisterExpenseForm'

const InsertExpense = (props) => {

	const subcategoryID = props["*"]

	return (
		<Fragment>
			<PageTitle text='Register expense' />
			<RegisterExpense>
				{
					(registerExpense, { data, loading, error }) => { // eslint-disable-line no-unused-vars
						const onSubmit = ({ category, subcategory, quantity, date }) => {
							const variables = { category, subcategory, quantity: parseFloat(quantity), date };
							registerExpense({ variables }).then(({ data }) => {
								window.location.href = '/register-expense'
							}).catch(e => {
								console.error(e.message) // eslint-disable-line no-console
							})
						}

						const errorMsg = error && 'Data provided is not valid'

						return <RegisterExpenseForm disabled={loading} error={errorMsg} onSubmit={onSubmit} />
					}
				}
			</RegisterExpense>
			<p> Pendiente de pasar esto al componente de form para poderlo validar junto al resto de datos antes de enviar el form: {props.categoryID}</p>
			<p> Pendiente de pasar esto al componente de form para poderlo validar junto al resto de datos antes de enviar el form (subcategoría): {subcategoryID}</p>
		</Fragment>
	)
}

InsertExpense.displayName = 'InsertExpense'

export default InsertExpense
