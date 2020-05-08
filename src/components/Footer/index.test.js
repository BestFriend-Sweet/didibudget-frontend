
// 		<footer className="footer mt-auto py-3 fixed-bottom bg-dark border-top border-info">
// 			<div className="container text-center">
// 				<span className="text-muted font-weight-light">
// 					Made by <a className="text-info" target="_blank" rel="noreferrer noopener" href="https://didaquis.github.io/">didaquis</a>
// 				</span>
// 			</div>
// 		</footer>


import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Footer } from './'

describe('Footer', () => {
	afterEach(cleanup)

	it('renders a link with correct attributes', () => {
		const { getByText } = render(<Footer />)

		expect(getByText('didaquis').href).toBe('https://didaquis.github.io/')
		expect(getByText('didaquis').closest('a')).toHaveAttribute('href', 'https://didaquis.github.io/') /* Alternative way */

		expect(getByText('didaquis').target).toBe('_blank')
		expect(getByText('didaquis').rel).toBe('noreferrer noopener')
	})

	it('contains an expected text', () => {
  		render(<Footer />)

  		const expectedText = 'Made by didaquis'

		screen.getByText((content, node) => {
			const hasText = (node) => node.textContent === expectedText;
			const nodeHasText = hasText(node);
			const childrenDontHaveText = Array.from(node.children).every(
			  (child) => !hasText(child)
			);

			return nodeHasText && childrenDontHaveText;
		});
	})
})