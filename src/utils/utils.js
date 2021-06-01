/**
 * Convert an Unix timestamp to human readable datetime (local time zone)
 * @param  {String|Number} timestamp
 * @return {String}
 */
const parseUnixTimestamp = (timestamp) => {
	timestamp = parseInt(timestamp)
	const d = new Date(timestamp)

	let month = `${(d.getMonth() + 1)}`
	let day = `${d.getDate()}`
	const year = d.getFullYear()
	let hour = `${d.getHours()}`
	let minute = `${d.getMinutes()}`

	if (month.length < 2) month = `0${month}`
	if (day.length < 2) day = `0${day}`
	if (hour.length < 2) hour = `0${hour}`
	if (minute.length < 2) minute = `0${minute}`

	const date = [year, month, day].join('-')
	const time = [hour, minute].join(':')

	return `${date} ${time}`
}

/**
* Calculate the first day of next month
* @example
*   firstDayOfNextMonth('2019-12-03') // 2020-01-01
* @param  {String} date - Must represent a date with the same format as the example
* @return {String}
*/
const firstDayOfNextMonth = (date) => {
	const parts = date.split('-')

	let year = parts[0]
	let month = parts[1]

	month++

	if (month == '13') { // eslint-disable-line eqeqeq
		year++
		month = '01'
	}

	if (month.toString().length < 2) month = `0${month.toString()}`

	return `${year}-${month}-01`
}

/**
* Calculate the first day of the month
* @example
*   firstDayOfTheMonth('2019-12-03') // 2019-12-01
* @param  {String} date - Must represent a date with the same format as the example
* @return {String}
*/
const firstDayOfTheMonth = (date) => {
	const parts = date.split('-')
	const year = parts[0]
	const month = parts[1]
	return `${year}-${month}-01`
}

/**
 * Trim an number to two decimal points
 * @param {number} number 
 * @returns {number}
 */
const trimDecimalPoints = (number) => {
	const fixed = 2
	return ~~(Math.pow(10, fixed) * number) / Math.pow(10, fixed)
}

export {
	parseUnixTimestamp,
	firstDayOfNextMonth,
	firstDayOfTheMonth,
	trimDecimalPoints
}