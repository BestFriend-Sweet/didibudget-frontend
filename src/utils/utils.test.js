import { parseUnixTimestamp, firstDayOfNextMonth, firstDayOfTheMonth, trimDecimalPoints, getFirstParamFromSplat } from './utils'

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

describe('trimDecimalPoints', () => {
	test('should return 0', () => {
		const result = trimDecimalPoints(0)
		expect(result).toEqual(0)
	})

	test('should return 0 if no receive any parameter', () => {
		const result = trimDecimalPoints()
		expect(result).toEqual(0)
	})

	test('should return an integer if receive an integer', () => {
		const result = trimDecimalPoints(7)
		expect(result).toEqual(7)
	})

	test('should return a float number with two decimals if receive a float with more than two decimals', () => {
		const result = trimDecimalPoints(1.23000001)
		expect(result).toEqual(1.23)
	})

	test('should return a float number with one decimal if receive a float with one decimal', () => {
		const result = trimDecimalPoints(4.2)
		expect(result).toEqual(4.2)
	})

	test('should return a negative float number with two decimals if receive a negative float with more than two decimals', () => {
		const result = trimDecimalPoints(-34.200000006)
		expect(result).toEqual(-34.2)
	})
})

describe('getFirstParamFromSplat', () => {
	test('should return null if no receive any parameter', () => {
		const result = getFirstParamFromSplat()
		expect(result).toBeNull()
	})

	test('should return null if receive an empty string as parameter', () => {
		const result = getFirstParamFromSplat('')
		expect(result).toBeNull()
	})

	test('should return all chars before the first slash', () => {
		const result = getFirstParamFromSplat('5ea7113296474318495ba3e5/discarted/text')
		expect(result).toEqual('5ea7113296474318495ba3e5')
	})

	test('should return all chars before the first slash even if there are not any slash', () => {
		const result = getFirstParamFromSplat('47433e518495ea71132965ba')
		expect(result).toEqual('47433e518495ea71132965ba')
	})
})