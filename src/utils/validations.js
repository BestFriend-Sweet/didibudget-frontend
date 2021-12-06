/**
 * Regular expression for email
 * @type {RegExp}
 * @default
 */
const regexEmail = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)

/**
 * Regular expression for password
 * @type {RegExp}
 * @default
 */
const regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$/)

/**
 * Regular expression for a quantity of money. Allow any integer value and float numbers up to two decimals. The decimal separator must be a point. Example: 123.45
 * @type {RegExp}
 * @default
 */
const regexQuantityOfMoney = new RegExp(/^\s*-?\d+(\.\d{1,2})?\s*$/)

/**
 * Validate the login form data. This is useful for reduce traffic to backend
 * @param {string} email
 * @param {string} password
 * @returns {boolean}                - True means data is valid
 */
const validateLoginForm = (email, password) => {
	let dataIsValid = true

	if (!email || !password) {
		dataIsValid = false
	}

	if (!regexEmail.test(email)) {
		dataIsValid = false
	}

	if (!regexPassword.test(password)) {
		dataIsValid = false
	}
	return dataIsValid
}

/**
 * Validate the registration form data
 * @param {string} email
 * @param {string} password
 * @param {string} repeatPassword
 * @returns {boolean}                - True means data is valid
 */
const validateRegisterForm = (email, password, repeatPassword) => {
	let dataIsValid = true

	if (!email || !password || !repeatPassword) {
		dataIsValid = false
	}

	if (password !== repeatPassword) {
		dataIsValid = false
	}

	if (!regexEmail.test(email)) {
		dataIsValid = false
	}

	if (!regexPassword.test(password)) {
		dataIsValid = false
	}
	return dataIsValid
}

/**
 * Validate the registration of monthly balance
 * @param {Integer|Float} balance
 * @param {Integer} year
 * @param {string} month
 * @returns {boolean}         		- True means data is valid
 */
const validateRegisterMonthlyBalanceForm = (balance, year, month) => {
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	let dataIsValid = true

	if (!year || !month) {
		dataIsValid = false
	}

	if (!balance && balance !== 0) {
		dataIsValid = false
	}

	if (!regexQuantityOfMoney.test(balance)) {
		dataIsValid = false
	}

	if (!Number.isInteger(parseInt(year))) {
		dataIsValid = false
	}

	if (year.toString().length !== 4) {
		dataIsValid = false
	}

	if (!monthNames.includes(month)) {
		dataIsValid = false
	}

	return dataIsValid
}

/**
 * Validate the registration of expense
 * @param {Integer|Float|string} quantity - Zero is not a valid value
 * @param {Date} date
 * @returns {boolean}         		- True means data is valid
 */
const validateRegisterExpenseForm = (quantity, date) => {
	let dataIsValid = true

	if (!quantity || Math.sign(quantity) !== 1) {
		dataIsValid = false
	}

	if (!date || Object.prototype.toString.call(date) !== '[object Date]') {
		dataIsValid = false
	}

	if (!regexQuantityOfMoney.test(quantity)) {
		dataIsValid = false
	}

	return dataIsValid
}


module.exports = {
	validateLoginForm,
	validateRegisterForm,
	validateRegisterMonthlyBalanceForm,
	validateRegisterExpenseForm,
}