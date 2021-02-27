import { getNameOfCategoryOrSubcategory } from './index'

let categories

describe('getNameOfCategoryOrSubcategory', () => {

	beforeEach(() => {
		categories = [
			{
				'_id': '4f14ca',
				'name': 'foo',
				'subcategories': [],
				'uuid': 'a39e-2f76b6d785bb',
				'__typename': 'ExpenseCategory'
			},
			{
				'_id': '4f14cc',
				'name': 'bar',
				'subcategories': [],
				'uuid': '9d0b-08f8bc3d87ff',
				'__typename': 'ExpenseCategory'
			},
			{
				'_id': '4f14d7',
				'name': 'biz',
				'subcategories': [
					{
						'_id': '5ba3e5',
						'name': 'biz biz',
						'uuid': '850a-2ebd108fdc22',
						'__typename': 'ExpenseSubcategory'
					},
					{
						'_id': '4f14b4',
						'name': 'biz biz biz',
						'uuid': '926e-d67452749ede',
						'__typename': 'ExpenseSubcategory'
					},
				],
				'uuid': '8845-70e0ff94c1b4',
				'__typename': 'ExpenseCategory'
			}]
	})


	test('should return null if receive null as first parameter', () => {
		const target = null

		const result = getNameOfCategoryOrSubcategory(target, categories)

		expect(result).toBeNull()
	})

	test('should return null if receive an empty array as second parameter', () => {
		const target = '4f14ca'
		categories = []

		const result = getNameOfCategoryOrSubcategory(target, categories)

		expect(result).toBeNull()
	})

	test('should return null if the id is not on the array', () => {
		const target = '77777'

		const result = getNameOfCategoryOrSubcategory(target, categories)

		expect(result).toBeNull()
	})

	test('should return the name of category if it is on the array', () => {
		const target = '4f14ca'

		const result = getNameOfCategoryOrSubcategory(target, categories)

		expect(result).toBe('foo')
	})

	test('should return the name of subcategory if it is on the array', () => {
		const target = '5ba3e5'

		const result = getNameOfCategoryOrSubcategory(target, categories)

		expect(result).toBe('biz biz')
	})
})