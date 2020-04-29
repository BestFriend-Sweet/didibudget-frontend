import React from 'react'
import PropTypes from 'prop-types'

import { Mutation } from 'react-apollo'

import { REGISTER_EXPENSE } from '../gql/mutations/expenses'

export const RegisterExpense = ( { children } ) => {
	return (
		<Mutation mutation={REGISTER_EXPENSE}>
			{children}
		</Mutation>
	)
}

RegisterExpense.propTypes = {
	children: PropTypes.func.isRequired
}