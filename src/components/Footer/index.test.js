
// 		<footer className="footer mt-auto py-3 fixed-bottom bg-dark border-top border-info">
// 			<div className="container text-center">
// 				<span className="text-muted font-weight-light">
// 					Made by <a className="text-info" target="_blank" rel="noreferrer noopener" href="https://didaquis.github.io/">didaquis</a>
// 				</span>
// 			</div>
// 		</footer>


import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Footer } from './'

describe('Footer', () => {
	afterEach(cleanup)

	it('renders correctly', () => {
		const { getByText } = render(<Footer />)

		expect(getByText('Made by')).toBeInTheDocument()
	})


	it('have a link with correct href attribute', () => {
		const { getByText } = render(<Footer />)

		expect(getByText('didaquis').closest('a')).toHaveAttribute('href', 'https://didaquis.github.io/')
		expect(getByText('didaquis').href).toBe('https://didaquis.github.io/')
	})
})