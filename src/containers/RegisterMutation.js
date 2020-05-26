import React from 'react'
import PropTypes from 'prop-types'

import { useMutation } from '@apollo/client'

import { REGISTER } from '../gql/mutations/auth'

export const RegisterMutation = ( { children } ) => {
	return (
		<useMutation mutation={REGISTER}>
			{children}
		</Mutation>
	)
}

RegisterMutation.propTypes = {
	children: PropTypes.func.isRequired
}