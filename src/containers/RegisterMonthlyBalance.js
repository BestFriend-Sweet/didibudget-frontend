import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { REGISTER_MONTHLY_BALANCE } from '../gql/mutations/monthlyBalance'

export const RegisterMonthlyBalance = ( { children } ) => {
	return (
		<useMutation mutation={REGISTER_MONTHLY_BALANCE}>
			{children}
		</useMutation>
	)
}

RegisterMonthlyBalance.propTypes = {
	children: PropTypes.func.isRequired
}