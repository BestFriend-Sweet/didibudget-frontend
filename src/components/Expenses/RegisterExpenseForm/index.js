import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

import { ErrorAlert } from '../../ErrorAlert'
import { SubmitButton } from '../../SubmitButton'
import { SubmitButtonHelper } from '../../SubmitButtonHelper'
import { DateSelector } from '../../DateSelector'
import { ToggleButton } from '../../ToggleButton'

import { useInputValue } from '../../../hooks/useInputValue'
import { validateRegisterExpenseForm } from '../../../utils/validations'
import { getNameOfCategoryOrSubcategory } from '../utils'

import { REGISTER_EXPENSE } from '../../../gql/mutations/expenses'

export const RegisterExpenseForm = ({ selectedCategoryID, selectedSubcategoryID, categoryData }) => {
	const navigate = useNavigate()
	const [isDisabled, setIsDisabled] = useState(false)
	const [error, setError] = useState(null)
	const [toggleRegisterOneMoreExpense, setToggleRegisterOneMoreExpense] = useState(false)

	const [ registerExpense ] = useMutation(REGISTER_EXPENSE)

	const quantity = useInputValue('')
	const [date, setDate] = useState(null)

	const onChange = (date) => {
		setDate(date)
	}

	const onToggleRegisterAnotherExpense = (value) => {
		setToggleRegisterOneMoreExpense(value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setIsDisabled(true)
		setError(null)

		const variables = { category: selectedCategoryID, subcategory: selectedSubcategoryID, quantity: parseFloat(quantity.value), date }

		registerExpense({ variables }).then(() => {
			if (toggleRegisterOneMoreExpense) {
				navigate('/list-expense-categories')
				return
			}

			navigate('/expenses-administration')
		}).catch(e => {
			setError(e.message)
			setIsDisabled(false)
		})
	}

	const getCategoryInformation = () => {
		const categoryName = getNameOfCategoryOrSubcategory(selectedCategoryID, [ categoryData ])
		const subcategoryName = getNameOfCategoryOrSubcategory(selectedSubcategoryID, [ categoryData ])

		if (!subcategoryName) {
			return categoryName
		}

		return `${categoryName} - ${subcategoryName}`
	}

	const categoryInformation = getCategoryInformation()

	return (
		<Fragment>
			<div className="row justify-content-center mt-4">
				<form className="col-md-8" disabled={isDisabled} onSubmit={handleSubmit}>

					<p className="text-white small text-truncate">{ categoryInformation }</p>

					<div className="form-row">
						<DateSelector onChange={onChange} />
					</div>

					<div className="form-group">
						<label htmlFor="inputQuantityRegisterExpenseForm" className="text-light">quantity <span className="text-danger">*</span></label>
						<input
							disabled={isDisabled}
							inputMode="decimal"
							className="form-control"
							id="inputQuantityRegisterExpenseForm"
							placeholder='1234.99'
							type='number'
							step='0.01'
							{...quantity}
							required
							autoFocus
						/>
						<small id="quantityHelp" className="form-text text-muted">Use decimal point as decimal separator. Negative numbers are not valid</small>
					</div>

					<div className="form-row mt-2 ml-1">
						<div className="col-auto">
							<SubmitButton disabled={isDisabled || !validateRegisterExpenseForm(quantity.value, date)}>Save expense</SubmitButton>
						</div>
						<div className="col pl-4 d-flex flex-row align-items-end">
							<ToggleButton
								text='Add more'
								defaultState={toggleRegisterOneMoreExpense}
								onToggle={onToggleRegisterAnotherExpense}
							/>
						</div>
						<div className="col-12">
							<SubmitButtonHelper mustShowHelper={!validateRegisterExpenseForm(quantity.value, date)}></SubmitButtonHelper>
						</div>
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
	selectedCategoryID: PropTypes.string.isRequired,
	selectedSubcategoryID: PropTypes.string,
	categoryData: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		subcategories: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				uuid: PropTypes.string.isRequired
			})
		),
		uuid: PropTypes.string.isRequired
	}).isRequired,
}
