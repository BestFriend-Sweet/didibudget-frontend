import { parseUnixTimestamp, firstDayOfNextMonth, firstDayOfTheMonth } from './utils'

describe('parseUnixTimestamp', () => {

	test('should return a valid date in a human readable format', () => {
		const timestamp = 1588197712263

		const result = parseUnixTimestamp(timestamp)

		expect(result).toBe('2020-04-30 00:01')
	})

	test('should return another valid date in a human readable format', () => {
		const timestamp = 1479798793044

		const result = parseUnixTimestamp(timestamp)

		expect(result).toBe('2016-11-22 08:13')
	})
})

describe('firstDayOfNextMonth', () => {
	test('should return an string represent the first day on next month', () => {
		const date = '2019-12-03'
		const expectedResult = '2020-01-01'
		expect(firstDayOfNextMonth(date)).toBe(expectedResult)
	})

	test('should return an string represent the first day on next month even in a future date', () => {
		const date = '2073-01-07'
		const expectedResult = '2073-02-01'
		expect(firstDayOfNextMonth(date)).toBe(expectedResult)
	})
})

describe('firstDayOfTheMonth', () => {
	test('should return an string with represent the first day of the month', () => {
		const date = '2019-12-07'
		const expectedResult = '2019-12-01'
		expect(firstDayOfTheMonth(date)).toBe(expectedResult)
	})

	test('should return an string with represent the first day of the month even in future', () => {
		const date = '2073-01-07'
		const expectedResult = '2073-01-01'
		expect(firstDayOfTheMonth(date)).toBe(expectedResult)
	})

	test('should return an string with represent the first day of the month even when receive a date that already is the first day of month', () => {
		const date = '2020-06-01'
		const expectedResult = '2020-06-01'
		expect(firstDayOfTheMonth(date)).toBe(expectedResult)
	})
})