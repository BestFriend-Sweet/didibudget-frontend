import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import { DidibudgetLogo } from './'

describe('DidibudgetLogo', () => {
	it('should be an accessible SVG with a default title', () => {
		render(<DidibudgetLogo />)

		const svg = screen.getByRole('img', { name: /^didibudget$/i })

		expect(svg).toBeInTheDocument()
	})

	it('should be an accessible SVG with a title received by props', () => {
		render(<DidibudgetLogo title="This is an accessible title" />)

		const svg = screen.getByRole('img', { name: /^This is an accessible title$/i })

		expect(svg).toBeInTheDocument()
	})
})