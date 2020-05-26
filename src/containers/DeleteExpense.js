import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { DELETE_EXPENSE } from '../gql/mutations/expenses'

export const DeleteExpense = ( { children } ) => {

	const [ deleteExpense, { data, loading, error } ] = useMutation(DELETE_EXPENSE);
	return (
		<>
			{children}
		</>
	)
}

DeleteExpense.propTypes = {
	children: PropTypes.func.isRequired
}