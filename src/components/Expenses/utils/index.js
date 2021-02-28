import { firstDayOfNextMonth, firstDayOfTheMonth, parseUnixTimestamp, trimDecimalPoints } from '../../../utils/utils'

/**
 * Get name of month and year from a date
 * @example
 * 	getLocaleDateString('2020-12-01'); // December 2020
 * @param {string} date - Example: '2020-12-01'
 * @returns {string}
 */
const getLocaleDateString = (date) => {
	return new Date(date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long' })
}

/**
 * Get an array with a date of the first day of the month for all months in "data" (included gaps)
 * @requires firstDayOfNextMonth
 * @requires firstDayOfTheMonth
 * @param  {Array.<Object>} data - An array of objects
 * @param  {String} data.date - A valid date with this format '2018-03-01'
 * @return {Array.<string>}
 */
const getListOfAllMonths = (data = []) => {
	const ensureDateAscending = (a, b) => new Date(a.date) - new Date(b.date)
	data.sort(ensureDateAscending)

	const firstMonth = firstDayOfTheMonth(data[0].date)
	const lastMonth = firstDayOfTheMonth(data[data.length - 1].date)

	const listOfAllMonths = [firstMonth]
	while (listOfAllMonths[listOfAllMonths.length -1] !== lastMonth) {
		const nextMonth = firstDayOfNextMonth(listOfAllMonths[listOfAllMonths.length -1])
		listOfAllMonths.push(nextMonth)
	}
	return listOfAllMonths
}


/**
* Parse the data of expenses to obtain the sum per month. This function refill the empty data of every month and do a sum of every months.
* @requires getLocaleDateString
* @requires trimDecimalPoints
* @example
* 	const data = [{'quantity': 3, 'date': '2020-10-31'},{'quantity': 99.03, 'date': '2020-10-31'}, {'quantity': 2.45, 'date': '2020-12-07'}]
* 	getSumPerMonth(data) // [{ label: 'October 2020', sum: 102.03 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 2.45 }]
* @param  {Array.<Object>} data - An array of objects
* @param  {String} data.date - A valid date with this format '2018-03-01'
* @param  {float|integer} data.quantity
* @return {Array.<Object>}
*/
const getSumPerMonth = (data = []) => {
	if (!data.length) {
		return []
	}

	const listOfAllMonths = getListOfAllMonths(data)

	const emptyExpenses = listOfAllMonths.map( month => {
		return {
			label: getLocaleDateString(month),
			sum: 0
		}
	})

	const realExpenses = data.map(element => {
		return {
			label: getLocaleDateString(element.date),
			sum: element.quantity
		}
	})

	const mixedExpenses = [...emptyExpenses, ...realExpenses]

	const result = []
	const allLabelsInResult = []
	mixedExpenses.forEach((element) => {
		if (allLabelsInResult.includes(element.label)){
			result.forEach((item) => {
				if(item.label === element.label) {
					item.sum += element.sum
				}
			})
		} else {
			result.push(element)
			allLabelsInResult.push(element.label)
		}
	})

	result.forEach(month => {
		month.sum = trimDecimalPoints(month.sum)
	})

	return result
}

/**
 * Get name of category or subcategory using provided data.
 * @param  {String} target 		MongoDB identifier of category or subcategory
 * @param  {Array} categories 	Array with all categories and subcategories
 * @return {String|null}
 */
const getNameOfCategoryOrSubcategory = (target, categories) => {
	if (target === null || categories.length === 0) {
		return null
	}

	let result = null

	categories.forEach(category => {
		if (category._id === target) {
			result = category.name
		}

		category.subcategories.forEach(subcategory =>{
			if (subcategory._id === target) {
				result = subcategory.name
			}
		})
	})

	return result
}

/**
 * This function performs a summation grouping the expenses by months. For each month, the categories of expenses are grouped. For each category their subcategories are also grouped
 * @requires trimDecimalPoints
 * @requires getSumPerMonth
 * @param  {Array.<Object>} rawData - An array of objects (the object must contain a date property
 * @param  {String} rawData.category - An UUID value to identify a category
 * @param  {String|null} rawData.subcategory - An UUID value to identify a subcategory or null
 * @param  {Number} rawData.quantity - An integer o float number
 * @param  {String} rawData.date - A valid date with this format: '1514447205699'
 * @param  {String} rawData.currencyISO - A currency. Example: 'EUR'
 * @param  {String} rawData.uuid - An UUID value
 * @returns {Array.<Object>}
 */
const getDetailedExpendesPerMonth = (rawData = []) => {
	if (!rawData.length) {
		return []
	}

	const data = rawData.map(expenses => {
		return {
			...expenses,
			date: parseUnixTimestamp(expenses.date).substring(0, 10)
		}
	})

	const monthDTO = (label, sum) => {
		return {
			month: label,
			totalInMonth: trimDecimalPoints(sum),
			perCategory: []
		}
	}
	const categoryDTO = (uuid, quantity, subcategoriesParsed = []) => {
		return {
			uuidCategory: uuid,
			totalInCategory: trimDecimalPoints(quantity),
			perSubcategory: subcategoriesParsed
		}
	}
	
	const getParsedSubcategoriesInThisMonth = (expensesInThisMonth) => {
		const listOfSubcategoriesInThisMonth = []
		expensesInThisMonth.forEach(expense => {
			if (!listOfSubcategoriesInThisMonth.includes(expense.subcategory)) {
				listOfSubcategoriesInThisMonth.push(expense.subcategory)
			}
		})

		const totalExpensePerSubcategory = []
		listOfSubcategoriesInThisMonth.forEach(subcategory => {
			if (subcategory) {
				let quantity = 0
				let uuidParentCategory
				expensesInThisMonth.forEach(expense => {
					if (expense.subcategory === subcategory) {
						quantity += expense.quantity
						uuidParentCategory = expense.category
					}
				})
				totalExpensePerSubcategory.push({
					uuidParentCategory: uuidParentCategory,
					uuidSubcategory: subcategory,
					totalInSubcategory: trimDecimalPoints(quantity)
				})
			}
		})

		return totalExpensePerSubcategory
	}

	const sumPerMonth = getSumPerMonth(data)

	const parsedMonths = sumPerMonth.map(month => {
		return monthDTO(month.label, month.sum)
	})

	const parsedMonthsWithCategoriesAndSubcategories = parsedMonths.map(month => {

		const allExpensesInThisMonth = data.filter(expense => {
			return getLocaleDateString(expense.date) === month.month
		})

		const parsedSubcategoriesInThisMonth = getParsedSubcategoriesInThisMonth(allExpensesInThisMonth)

		const listOfCategoriesInThisMonth = []
		allExpensesInThisMonth.forEach(expense => {
			if (!listOfCategoriesInThisMonth.includes(expense.category)) {
				listOfCategoriesInThisMonth.push(expense.category)
			}
		})

		const totalExpensePerCategory = listOfCategoriesInThisMonth.map(category => {
			let quantity = 0
			allExpensesInThisMonth.forEach(expense => {
				if (expense.category === category) {
					quantity += expense.quantity
				}
			})

			const subcategories = parsedSubcategoriesInThisMonth.filter(subcategory => subcategory.uuidParentCategory === category)
			const subcategoriesParsed = subcategories.map(subcategory => {
				const result = {
					...subcategory
				}
				delete result.uuidParentCategory
				return result
			})

			return categoryDTO(category, quantity, subcategoriesParsed)
		})

		return {
			...month,
			perCategory: totalExpensePerCategory
		}
	})

	return parsedMonthsWithCategoriesAndSubcategories
}


export {
	getNameOfCategoryOrSubcategory,
	getSumPerMonth,
	getDetailedExpendesPerMonth
}
