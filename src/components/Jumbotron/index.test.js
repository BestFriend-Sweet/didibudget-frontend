import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Jumbotron } from './'

describe('Jumbotron', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Jumbotron title='foo' subtitle='bar' />)

		expect(getByText('foo')).toBeInTheDocument()
		expect(getByText('bar')).toBeInTheDocument()
	})

	it('contains an expected text', () => {
		render(<Jumbotron title='foo' subtitle='bar' />)

		const expectedText = 'foobar'

		screen.getByText((content, node) => {
			const hasText = (node) => node.textContent === expectedText
			const nodeHasText = hasText(node)
			const childrenDontHaveText = Array.from(node.children).every(
			  (child) => !hasText(child)
			)

			return nodeHasText && childrenDontHaveText
		})
	})

	it('contains the correct DOM nodes', () => {
		/* This test is just for learning purpose. Observe how you can get access to the DOM node properties */

		render(<Jumbotron title='my-title' subtitle='my-subtitle' />)

		const nodeTitle = screen.getByText('my-title')

		expect(nodeTitle.localName).toBe('h2')
		expect(nodeTitle.dataset.easteregg).toBe('The cake is a lie')
		expect(nodeTitle.className).toBe('display-4 mb-4')


		const nodeSubtitle = screen.getByText('my-subtitle')

		expect(nodeSubtitle.localName).toBe('p')
		expect(nodeSubtitle.className).toBe('lead')

		/*
			Other interesting properties of nodes:
			- node.dataset
			- node.id
			- node.innerHTML
			- node.textContent
			- node.parentNode
			- node.childNodes
			- node.firstChild
			- node.lastChild
			- node.nextSibling (return another node, so you can concatenate properties like this: node.nextSibling.localName)
			- node.previousSibling

		 */
	})
})