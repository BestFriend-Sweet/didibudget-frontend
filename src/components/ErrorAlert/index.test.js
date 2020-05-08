import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ErrorAlert } from './'

describe('Footer', () => {
	afterEach(cleanup)

	it('renders correctly', () => {
		const { getByText } = render(<ErrorAlert errorMessage='foo' />)

		expect(getByText('foo')).toBeInTheDocument()
	})
})