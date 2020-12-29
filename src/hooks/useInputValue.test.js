import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { useInputValue } from './useInputValue'

describe('useInputValue', () => {
	test('should return two properties', () => {
		let input
		const Component = () => {
			input = useInputValue(42)
			return null
		}
		render(<Component />)

		expect(input.value).toBeDefined()
		expect(typeof input.value).toBe('number')

		expect(input.onChange).toBeDefined()
		expect(typeof input.onChange).toBe('function')
		expect(input.onChange).toBeInstanceOf(Function)
	})

	test('should set a string value', () => {
		let input
		const Component = () => {
			input = useInputValue('default')
			return null
		}
		render(<Component />)

		expect(input.value).toBe('default')
		expect(typeof input.value).toBe('string')
	})

	test('should change value', () => {
		let input
		const Component = () => {
			input = useInputValue('')
			return null
		}
		render(<Component />)

		act(() => {
			const changedValue = { target: { value: 'foo' } }
			input.onChange(changedValue)
		})

		expect(input.value).toBe('foo')
	})
})