import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ErrorAlert } from './'

describe('ErrorAlert', () => {
	it('renders correctly', () => {
		const { getByText } = render(<ErrorAlert errorMessage='foo' />)

		expect(getByText('foo')).toBeInTheDocument()
	})
})