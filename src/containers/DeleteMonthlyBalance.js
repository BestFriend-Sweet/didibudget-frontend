import React from 'react'
import PropTypes from 'prop-types'

import { Mutation } from 'react-apollo'

import { DELETE_MONTHLY_BALANCE } from '../gql/mutations/monthlyBalance'

export const DeleteMonthlyBalance = ( { children } ) => {
	return (
		<Mutation mutation={DELETE_MONTHLY_BALANCE}>
			{children}
		</Mutation>
	)
}

DeleteMonthlyBalance.propTypes = {
	children: PropTypes.func.isRequired
}