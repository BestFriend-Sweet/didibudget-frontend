import { getSumPerMonth } from './utils'

import { rawData, expectedData } from './fixtures'

describe('getSumPerMonth', () => {
	test('should return an array', () => {
		expect(getSumPerMonth()).toEqual([])
	})

	test('should return an array of objects with properties "label" and "sum" if receive an array of valid data with at least one object', () => {
		expect.hasAssertions()
		const result = getSumPerMonth(rawData)

		result.forEach(element => {
			expect(element.label).toBeDefined()
			expect(typeof element.label).toBe('string')
			expect(element.sum).toBeDefined()
			expect(typeof element.sum).toBe('number')
			expect(element.sum).not.toBeNaN()
		})
	})

	test('should return an array of objects with a sum of quantity per month', () => {
		const result = getSumPerMonth(rawData)

		expect(result).toEqual(expectedData)
	})
})