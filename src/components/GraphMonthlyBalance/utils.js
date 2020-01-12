/**
* Calculate the first day of next month
* @example
*   firstDayOfNextMonth(2019-12-03) // 2020-01-01
* @param  {String} date - Must represent a date with the same format as the example
* @return {String}
*/
const firstDayOfNextMonth = (date) => {
	const parts = date.split('-');

	let year = parts[0];
	let month = parts[1];

	month++

	if (month == '13') { // eslint-disable-line eqeqeq
		year++
		month = '01'
	}

	if (month.toString().length < 2) month = `0${month.toString()}`

	return `${year}-${month}-01`
}

/**
* Calculate the average of values in an array
* @example
*   average( [ 4, 4, 5, 6, 6 ] ) // 5
* @param  {Array} arr - An array of integers or floats
* @return {Number}
*/
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length

/**
* Parse the data for monthly balance graph. This function refill the empty data of every month and do an average of repeated months. All returned days are pointing at the first day of month 
* @example
*   const data = [{"balance": 678.74,"date": "2014-12-01"},{"balance": 800.75,"date": "2015-01-01"},{"balance": 1189.88,"date": "2015-01-01"},{"balance": 8110.37,"date": "2015-03-01"}];
*   parseDataForGraph(data) // [ { date: '2014-12-01', balance: 678.74 }, { date: '2015-01-01', balance: 995.315 }, { date: '2015-02-01' }, { date: '2015-03-01', balance: 8110.37 } ]
* @param  {Array.<Object>} data - An array of objects (the object must contain a date property. The array must be ordered in date ascendant)
* @param  {String} data.date - A valid date with this format '2018-03-01'. 
* @param  {float|integer} data.balance
* @return {Array.<Object>}
*/
function parseDataForGraph (data = []) {
	if (!data.length) {
		return []
	}

	// Get all dates in original data avoiding repeated information and refill with the missing dates
	const firstDate = data[0].date
	const lastDate = data[data.length - 1].date

	let listOfAllDates = [firstDate]
	while (listOfAllDates[listOfAllDates.length -1] !== lastDate) {
		const nextMonth = firstDayOfNextMonth(listOfAllDates[listOfAllDates.length -1])
		if (!listOfAllDates.includes(nextMonth)) {
			listOfAllDates.push(nextMonth)
		}
	}

	// For each date, calculate the balance.
	// A date should not necessarily have a balance. If exist more than one balance for the same month, do an average.
	const result = [];
	listOfAllDates.forEach(date => {
		const monthlyData = {
			date: date
		}

		let allBalancesOnThisMonth = [];
		data.forEach(d => {
			if (d.date === date) {
				allBalancesOnThisMonth.push(d.balance)
			}
		})

		let averagedBalanced = average(allBalancesOnThisMonth) || 0
		if (averagedBalanced !== 0) {
			monthlyData.balance = parseFloat(averagedBalanced.toFixed(2))
		}
		result.push(monthlyData)
	})

	return result
}


module.exports = {
	parseDataForGraph
};
