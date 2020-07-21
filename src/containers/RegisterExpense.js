import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { REGISTER_EXPENSE } from '../gql/mutations/expenses'

export const RegisterExpense = ( { children } ) => {
	return (
		<useMutation mutation={REGISTER_EXPENSE}>
			{children}
		</useMutation>
	)
}

RegisterExpense.propTypes = {
	children: PropTypes.func.isRequired
}