import { firstDayOfNextMonth, firstDayOfTheMonth } from '../../../utils/utils'

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
 *  @example
 * 	const data = [{'quantity': 3, 'date': '2020-10-31'},{'quantity': 99.03, 'date': '2020-10-31'}, {'quantity': 2.45, 'date': '2020-12-07'}]
 * 	getSumPerMonth(data) // [{ label: 'October 2020', sum: 102.03 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 2.45 }]
 * @param  {Array.<Object>} data - An array of objects (the object must contain a date property. The array must be ordered in date ascendant)
 * @param  {String} data.date - A valid date with this format '2018-03-01'
 * @return {Array.<string>}
 */
const getListOfAllMonths = (data = []) => {
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
* @requires firstDayOfNextMonth
* @requires firstDayOfTheMonth
* @requires getLocaleDateString
* @example
* 	const data = [{'quantity': 3, 'date': '2020-10-31'},{'quantity': 99.03, 'date': '2020-10-31'}, {'quantity': 2.45, 'date': '2020-12-07'}]
* 	getSumPerMonth(data) // [{ label: 'October 2020', sum: 102.03 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 2.45 }]
* @param  {Array.<Object>} data - An array of objects (the object must contain a date property. The array must be ordered in date ascendant)
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

const getDetailedExpendesPerMonth = (data = []) => {
	if (!data.length) {
		return []
	}

	const monthDTO = (label, sum) => {
		return {
			month: label,
			totalInMonth: sum,
			perCategory: []
		}
	}
	const categoryDTO = (uuid, quantity) => {
		return {
			uuidCategory: uuid,
			totalInCategory: quantity,
			perSubcategory: []
		}
	}
	const subcategoryDTO = () => {
		return {
			uuidSubcategory: '',
			totalInSubcategory: 0
		}
	}
	

	const sumPerMonth = getSumPerMonth(data)

	const parsedMonths = sumPerMonth.map(month => {
		return monthDTO(month.label, month.sum)
	})

	const parsedMonthsWithCategories = parsedMonths.map(month => {

		const allExpensesOnThisMonth = data.filter(expense => {
			return getLocaleDateString(expense.date) === month.month
		})

		const listOfCategoriesOnThisMonth = []
		allExpensesOnThisMonth.forEach(expense => {
			if (!listOfCategoriesOnThisMonth.includes(expense.category)) {
				listOfCategoriesOnThisMonth.push(expense.category)
			}
		})

		const totalExpensePerCategory = listOfCategoriesOnThisMonth.map(category => {
			let quantity = 0
			allExpensesOnThisMonth.forEach(expense => {
				if (expense.category === category) {
					quantity += expense.quantity
				}
			})

			return categoryDTO(category, quantity)
		})

		//console.log('.... allExpensesOnThisMonth', allExpensesOnThisMonth)
		//console.log('.... totalExpensePerCategory', totalExpensePerCategory)
		return {
			...month,
			perCategory: totalExpensePerCategory
		}
	})

	console.log(parsedMonthsWithCategories)
	return parsedMonthsWithCategories
}


export {
	getNameOfCategoryOrSubcategory,
	getSumPerMonth,
	getDetailedExpendesPerMonth
}
