import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { PageSubTitle } from './'

describe('PageSubTitle', () => {
	it('renders correctly', () => {
		const { getByText } = render(<PageSubTitle text='biz' />)

		expect(getByText('biz')).toBeInTheDocument()
	})

	it('renders correctly the children value', () => {
		render(<PageSubTitle>Hello <strong>world</strong></PageSubTitle>)

		const expectedText = 'Hello world'

		screen.getByText((content, node) => {
			const hasText = (node) => node.textContent === expectedText
			const nodeHasText = hasText(node)
			const childrenDontHaveText = Array.from(node.children).every(
			  (child) => !hasText(child)
			)

			return nodeHasText && childrenDontHaveText
		})
	})

	it('is a title', () => {
		render(<PageSubTitle text='example' />)

		const nodeTitle = screen.getByText('example')

		expect(nodeTitle.localName).toBe('h5')
	})
})