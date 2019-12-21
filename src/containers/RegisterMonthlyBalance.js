import React from 'react'
import PropTypes from 'prop-types'

import { Mutation } from 'react-apollo'

import { REGISTER_MONTHLY_BALANCE } from '../gql/mutations/monthlyBalance'

export const RegisterMonthlyBalance = ( { children } ) => {
	return (
		<Mutation mutation={REGISTER_MONTHLY_BALANCE}>
			{children}
		</Mutation>
	)
}

RegisterMonthlyBalance.propTypes = {
	children: PropTypes.func.isRequired
}