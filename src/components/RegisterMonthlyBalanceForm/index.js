import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { SubmitButton } from '../SubmitButton'
import { SubmitButtonHelper } from '../SubmitButtonHelper'
import { ErrorAlert } from '../ErrorAlert'

import { useInputValue } from '../../hooks/useInputValue'
//import { validateRegisterMonthlyBalanceForm } from '../../utils/utils'


export const RegisterMonthlyBalanceForm = ({ error, disabled, onSubmit }) => {

	const validateRegisterMonthlyBalanceForm = () => {
		// dídac
		return true
	}

	const balance = useInputValue('')
	const date = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ balance: balance.value, date: date.value })
	}

	return (
		<Fragment>
			<div className="row justify-content-center mt-4">
				<form className="col-md-8" disabled={disabled} onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputbalanceRegisterMonthlyBalanceForm" className="text-light">Balance <span className="text-danger">*</span></label>
						<input
							disabled={disabled}
							className="form-control"
							id="inputbalanceRegisterMonthlyBalanceForm"
							placeholder='balance'
							type='number'
							step='0.01'
							{...balance}
							required
							autoFocus
						/>
						<small id="balanceHelp" className="form-text text-muted">Example: 1234.56</small>
					</div>
					<div className="form-group">
						<label htmlFor="inputdateRegisterMonthlyBalanceForm" className="text-light">Date <span className="text-danger">*</span></label>
						<input
							disabled={disabled}
							className="form-control"
							id="inputdateRegisterMonthlyBalanceForm"
							placeholder='date'
							{...date}
							required
						/>
						<small id="dateHelp" className="form-text text-muted">Example: 2019-12-01</small>
					</div>

					<div className="mt-2 ml-1">
						<SubmitButton disabled={disabled || !validateRegisterMonthlyBalanceForm(balance.value, date.value)}>New monthly balance</SubmitButton>
						<SubmitButtonHelper mustShowHelper={!validateRegisterMonthlyBalanceForm(balance.value, date.value)}></SubmitButtonHelper>
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

RegisterMonthlyBalanceForm.propTypes = {
	error: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
}
