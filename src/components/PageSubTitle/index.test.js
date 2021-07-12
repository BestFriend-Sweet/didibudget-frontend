import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { PageSubTitle } from './'

describe('PageSubTitle', () => {
	it('renders correctly', () => {
		const { getByText } = render(<PageSubTitle text='biz' />)

		expect(getByText('biz')).toBeInTheDocument()
	})

	it('is a title', () => {
		render(<PageSubTitle text='example' />)

		const nodeTitle = screen.getByText('example')

		expect(nodeTitle.localName).toBe('h5')
	})
})