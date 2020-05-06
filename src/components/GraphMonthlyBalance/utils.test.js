import { parseDataForGraph } from './utils'

describe('parseDataForGraph', () => {
	test('should return an empty array if receive an empty array', () => {
		// Given 
		const data = []

		// When
		const result = parseDataForGraph(data)

		// Then
	 	expect(result).toEqual([])
	})

	test('refill the empty data of every month and do an average of repeated months. All returned days are pointing at the first day of month', () => {
		// Given 
		const data = [{"balance": 678.74,"date": "2014-12-01"},{"balance": 800.75,"date": "2015-01-01"},{"balance": 1189.88,"date": "2015-01-01"},{"balance": 8110.37,"date": "2015-03-01"}]

		// When
		const result = parseDataForGraph(data)

		// Then
		const expectedResult = [{ date: '2014-12-01', balance: 678.74 }, { date: '2015-01-01', balance: 995.32 }, { date: '2015-02-01' }, { date: '2015-03-01', balance: 8110.37 }]
	 	expect(result).toEqual(expectedResult)
	})
})