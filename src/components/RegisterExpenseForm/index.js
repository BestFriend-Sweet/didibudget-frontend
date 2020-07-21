import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'

import { ErrorAlert } from '../ErrorAlert'
import { SubmitButton } from '../SubmitButton'
import { SubmitButtonHelper } from '../SubmitButtonHelper'
import { DateSelector } from '../DateSelector';

import { useInputValue } from '../../hooks/useInputValue'
import { validateRegisterExpenseForm } from '../../utils/validations'

import { REGISTER_EXPENSE } from '../../gql/mutations/expenses'

export const RegisterExpenseForm = ({ props }) => {

	const [disabled, setDisabled] = useState(false)
	const [error, setError] = useState(null)

	const [ registerExpense ] = useMutation(REGISTER_EXPENSE);

	const quantity = useInputValue('')
	const [date, setDate] = useState(null)

	const onChange = (date) => {
		setDate(date)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setDisabled(true)
		setError(null)

		const subcategoryID = props["*"] || null
		const variables = { category: props.categoryID, subcategory: subcategoryID, quantity: parseFloat(quantity.value), date }

		registerExpense({ variables }).then(({ data }) => {
			window.location.href = '/expenses-administration'
		}).catch(e => {
			setError(e.message)
			console.error(e.message) // eslint-disable-line no-console
		})
		setDisabled(false)
	}

	return (
		<Fragment>
			<div className="row justify-content-center mt-4">
				<form className="col-md-8" disabled={disabled} onSubmit={handleSubmit}>

					<div className="form-row">
						<DateSelector onChange={onChange} />
					</div>

					<div className="form-group">
						<label htmlFor="inputQuantityRegisterExpenseForm" className="text-light">quantity <span className="text-danger">*</span></label>
						<input
							disabled={disabled}
							className="form-control"
							id="inputQuantityRegisterExpenseForm"
							placeholder='€1234.99'
							type='number'
							step='0.01'
							{...quantity}
							required
							autoFocus
						/>
						<small id="quantityHelp" className="form-text text-muted">Use decimal point as decimal separator. Negative numbers are not valid</small>
					</div>

					<div className="mt-2 ml-1">
						<SubmitButton disabled={disabled || !validateRegisterExpenseForm(quantity.value, date)}>New expense</SubmitButton>
						<SubmitButtonHelper mustShowHelper={!validateRegisterExpenseForm(quantity.value, date)}></SubmitButtonHelper>
					</div>
				</form>
				<div className="col-md-8">
				{
					error && <ErrorAlert errorMessage={error} />
				}
				</div>
			</div>
		</Fragment>
	)
}

RegisterExpenseForm.propTypes = {
	props: PropTypes.shape({
		'*': PropTypes.string.isRequired,
		categoryID: PropTypes.string.isRequired,
	})
}
