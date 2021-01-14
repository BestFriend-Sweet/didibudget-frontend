import { firstDayOfNextMonth, firstDayOfTheMonth } from '../../utils/utils'

/**
* Parse the data of expenses to obtain the sum per month. This function refill the empty data of every month and do a sum of every months.
* @requires firstDayOfNextMonth 
* @requires firstDayOfTheMonth
* @example
* 	const data = [{'quantity': 3, 'date': '2020-10-31'},{'quantity': 99.03, 'date': '2020-10-31'}, {'quantity': 2.45, 'date': '2020-12-07'}]
* 	getSumPerMonth(data) // [{ label: 'October 2020', sum: 102.03 }, { label: 'November 2020', sum: 0 }, { label: 'December 2020', sum: 2.45 }]
* @param  {.<Object>} data - An array of objects (the object must contain a date property. The array must be ordered in date ascendant)
* @param  {String} data.date - A valid date with this format '2018-03-01'
* @param  {float|integer} data.quantity
* @return {Array.<Object>}
*/
const getSumPerMonth = (data = []) => {
	if (!data.length) {
		return []
	}

	const getLocaleDateString = (date) => {
		return new Date(date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long' })
	}

	// Get an array with a date of the first day of the month for all months in "data" (included gaps)
	const firstMonth = firstDayOfTheMonth(data[0].date)
	const lastMonth = firstDayOfTheMonth(data[data.length - 1].date)

	const listOfAllMonths = [firstMonth]
	while (listOfAllMonths[listOfAllMonths.length -1] !== lastMonth) {
		const nextMonth = firstDayOfNextMonth(listOfAllMonths[listOfAllMonths.length -1])
		listOfAllMonths.push(nextMonth)
	}

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

export {
	getSumPerMonth,
}
