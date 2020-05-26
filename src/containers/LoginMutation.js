import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { LOGIN } from '../gql/mutations/auth'

export const LoginMutation = ( { children } ) => {
	return (
		<useMutation mutation={LOGIN}>
			{children}
		</Mutation>
	)
}

LoginMutation.propTypes = {
	children: PropTypes.func.isRequired
}