import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { SubmitButton } from '../SubmitButton'
import { SubmitButtonHelper } from '../SubmitButtonHelper'
import { ErrorAlert } from '../ErrorAlert'
import { DateSelector } from '../DateSelector';

import { useInputValue } from '../../hooks/useInputValue'
import { validateRegisterExpenseForm } from '../../utils/validations'


export const RegisterExpenseForm = ({ error, disabled, onSubmit }) => {

	const quantity = useInputValue('')
	const [date, setDate] = useState(null)

	const onChange = (date) => {
		console.log(date);
		setDate(date)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ quantity: quantity.value, date: date })
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
						<small id="quantityHelp" className="form-text text-muted">Use decimal point as decimal separator</small>
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
	error: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
}
