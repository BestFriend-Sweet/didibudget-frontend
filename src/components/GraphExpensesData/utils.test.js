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

	test('should fill the gap of months without data', () => {
		const data = [{'quantity': 3, 'date': '2020-10-21'},{'quantity': 99.03, 'date': '2020-10-31'}, {'quantity': 2.45, 'date': '2020-12-07'}]
		const result = getSumPerMonth(data)
		
		const expected = [{ label: 'October 2020', sum: 102.03 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 2.45 }]
		expect(result).toEqual(expected)
	})

	test('should fill the gap of several months without data', () => {
		const data = [
			{
				'category': '5e64ec217048af874c4f14cd',
				'subcategory': null,
				'quantity': 12,
				'date': '2020-10-31',
				'currencyISO': 'EUR',
				'uuid': '040b7060-6322-4cf7-9f52-2cacd5c0be10',
				'__typename': 'Expense'
			},
			{
				'category': '5e64ec217048af874c4f14d6',
				'subcategory': '5e64ec217048af874c4f14b1',
				'quantity': 12.01,
				'date': '2021-02-10',
				'currencyISO': 'EUR',
				'uuid': '0363b8bc-c40c-401b-b285-2f7bc58ba210',
				'__typename': 'Expense'
			}
		]

		const expected = [ { label: 'October 2020', sum: 12 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 0 }, { label: 'January 2021', sum: 0 }, { label: 'February 2021', sum: 12.01 } ]

		const result = getSumPerMonth(data)
		expect(result).toEqual(expected)
	})
})