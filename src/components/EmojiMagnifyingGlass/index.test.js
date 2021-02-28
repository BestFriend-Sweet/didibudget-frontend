import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { EmojiMagnifyingGlass } from './index'

describe('EmojiMagnifyingGlass', () => {
	it('should render an emoji with properly description', () => {
		render(<EmojiMagnifyingGlass />)

		const element = screen.getByRole('img', { name: /Magnifying glass/i })
		
		expect(element).toBeInTheDocument()
		expect(element).toHaveTextContent(/^🔎$/)
	})
})