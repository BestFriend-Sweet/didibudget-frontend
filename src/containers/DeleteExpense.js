import React from 'react'
import PropTypes from 'prop-types'

import { Mutation } from 'react-apollo'

import { DELETE_EXPENSE } from '../gql/mutations/expenses'

export const DeleteExpense = ( { children } ) => {
	return (
		<Mutation mutation={DELETE_EXPENSE}>
			{children}
		</Mutation>
	)
}

DeleteExpense.propTypes = {
	children: PropTypes.func.isRequired
}