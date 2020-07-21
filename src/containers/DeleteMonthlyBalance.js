import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { DELETE_MONTHLY_BALANCE } from '../gql/mutations/monthlyBalance'

export const DeleteMonthlyBalance = ( { children } ) => {
	return (
		<useMutation mutation={DELETE_MONTHLY_BALANCE}>
			{children}
		</useMutation>
	)
}

DeleteMonthlyBalance.propTypes = {
	children: PropTypes.func.isRequired
}