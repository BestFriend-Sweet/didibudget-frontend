import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { UserCard } from './'

describe('UserCard', () => {
	afterEach(cleanup)

	it('should renders correctly and show the email of user', () => {
		const data = {
			email: 'foo@mail.com',
			isAdmin: false
		}
		const { getByText } = render(<UserCard userData={data} />)

		expect(getByText('foo@mail.com')).toBeInTheDocument()
	})

	it('should show if user is an administrator user', () => {
		const props = {
			email: 'foo@mail.com',
			isAdmin: false
		}
		const { queryByText, rerender } = render(<UserCard userData={props} />)

		expect(queryByText('You are an administrator user!')).not.toBeInTheDocument()

		const newProps = {
			email: 'foo@mail.com',
			isAdmin: true
		}
		rerender(<UserCard userData={newProps} />)
		expect(queryByText('You are an administrator user!')).toBeInTheDocument()
	})
})