import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { PageTitle } from './'

describe('PageTitle', () => {
	afterEach(cleanup)

	it('renders correctly', () => {
		const { getByText } = render(<PageTitle text='foo' />)

		expect(getByText('foo')).toBeInTheDocument()
	})

	it('is a title', () => {
		render(<PageTitle text='foo' />)

		const nodeTitle = screen.getByText('foo')

		expect(nodeTitle.localName).toBe('h2q')
	})
})