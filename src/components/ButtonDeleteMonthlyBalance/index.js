import React from 'react'
import PropTypes from 'prop-types'

export const ButtonDeleteMonthlyBalance = ( { uuid, deleteFunc, disabled } ) => (
	<button
		type="button"
		disabled={disabled}
		className="btn btn-danger d-block d-md-inline-block mr-2"
		onClick={ () => {
			const message = 'Are you sure?';
			if (window.confirm(message)) {
				deleteFunc(uuid)
			}
		} }
	>
		&times; Delete
	</button>
)

ButtonDeleteMonthlyBalance.propTypes = {
	uuid: PropTypes.string.isRequired,
	deleteFunc: PropTypes.func.isRequired,
	disabled: PropTypes.bool
}