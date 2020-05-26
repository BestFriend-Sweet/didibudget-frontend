import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { DELETE_EXPENSE } from '../gql/mutations/expenses'

export const DeleteExpense = ( { children } ) => {
	return (
		<useMutation mutation={DELETE_EXPENSE}>
			{children}
		</Mutation>
	)
}

DeleteExpense.propTypes = {
	children: PropTypes.func.isRequired
}