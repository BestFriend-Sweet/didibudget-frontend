import { validateLoginForm, validateRegisterForm, validateRegisterMonthlyBalanceForm, validateRegisterExpenseForm } from './validations'

describe('validateLoginForm', () => {
	test('should return false if email is not valid', () => {
		const email = 'foo'
		const password = 'Aa1234_*_zZ'

		const result = validateLoginForm(email, password)

		expect(result).toBe(false)
	})

	test('should return false if password is not valid', () => {
		const email = 'example@mail.com'
		const password = ''

		const result = validateLoginForm(email, password)

		expect(result).toBe(false)
	})

	test('should return false if password is not enough secure', () => {
		const email = 'example@mail.com'

		const listOfUnsecurePasswords = ['foo', '1234', 'blablabla', 'AAAAAAAAAAA', '*_*_*_*_*_*_*', '1aA*']

		listOfUnsecurePasswords.forEach(password => {
			const result = validateLoginForm(email, password)

			expect(result).toBe(false)
		})
	})

	test('should return true if email and password are valid', () => {
		const listOfCredentials = [
			{
				email: 'example@mail.com',
				password: 'Aa1234_*_zZ'
			},
			{
				email: 'foo123@gmail.com',
				password: 'KjHg57_w!a'
			},
			{
				email: 'foo.foo@outlook.com',
				password: 'M8-TtT78QA'
			},
			{
				email: 'biz_biz@foo.es',
				password: 'kij_JJJ_77_00'
			},
			{
				email: 'bar@bar.org',
				password: 'ksdhYHGFY987342*-'
			}
		]

		listOfCredentials.forEach(credentials => {
			const result = validateLoginForm(credentials.email, credentials.password)

			expect(result).toBe(true)
		})
	})
})

describe('validateRegisterForm', () => {
	test('should return false if email is not valid', () => {
		const email = 'foo'
		const password = 'Aa1234_*_zZ'
		const repeatPassword = 'Aa1234_*_zZ'

		const result = validateRegisterForm(email, password, repeatPassword)

		expect(result).toBe(false)
	})

	test('should return false if password is not valid', () => {
		const email = 'example@mail.com'
		const password = ''
		const repeatPassword = 'Aa1234_*_zZ'

		const result = validateRegisterForm(email, password, repeatPassword)

		expect(result).toBe(false)
	})

	test('should return false if repeatPassword is not valid', () => {
		const email = 'example@mail.com'
		const password = 'Aa1234_*_zZ'
		const repeatPassword = ''

		const result = validateRegisterForm(email, password, repeatPassword)

		expect(result).toBe(false)
	})

	test('should return false if password and repeatPassword are not the same', () => {
		const email = 'example@mail.com'
		const password = 'Aa1234_*_zZ'
		const repeatPassword = 'Aa1234_*_zZ99'

		const result = validateRegisterForm(email, password, repeatPassword)

		expect(result).toBe(false)
	})

	test('should return false if password is not enough secure', () => {
		const email = 'example@mail.com'

		const listOfUnsecurePasswords = ['foo', '1234', 'blablabla', 'AAAAAAAAAAA', '*_*_*_*_*_*_*', '1aA*']

		listOfUnsecurePasswords.forEach(password => {
			const result = validateRegisterForm(email, password, password)

			expect(result).toBe(false)
		})
	})

	test('should return true if email and password are valid', () => {
		const listOfCredentials = [
			{
				email: 'example@mail.com',
				password: 'Aa1234_*_zZ',
				repeatPassword: 'Aa1234_*_zZ'
			},
			{
				email: 'foo123@gmail.com',
				password: 'KjHg57_w!a',
				repeatPassword: 'KjHg57_w!a'
			},
			{
				email: 'foo.foo@outlook.com',
				password: 'M8-TtT78QA',
				repeatPassword: 'M8-TtT78QA'
			},
			{
				email: 'biz_biz@foo.es',
				password: 'kij_JJJ_77_00',
				repeatPassword: 'kij_JJJ_77_00'
			},
			{
				email: 'bar@bar.org',
				password: 'ksdhYHGFY987342*-',
				repeatPassword: 'ksdhYHGFY987342*-'
			}
		]

		listOfCredentials.forEach(credentials => {
			const result = validateRegisterForm(credentials.email, credentials.password, credentials.repeatPassword)

			expect(result).toBe(true)
		})
	})
})

describe('validateRegisterMonthlyBalanceForm', () => {
	test('should return false if balance is not valid', () => {
		const listOfNotValidBalances = [null, undefined, 'foo', 56.0007777]
		const year = 2020
		const month = 'March'

		listOfNotValidBalances.forEach(balance => {
			const result = validateRegisterMonthlyBalanceForm(balance, year, month)

			expect(result).toBe(false)
		})
	})

	test('should return false if year is not valid', () => {
		const balance = 42.42
		const listOfNotValidYears = ['patata', 3, 0, NaN]
		const month = 'March'

		listOfNotValidYears.forEach(year => {
			const result = validateRegisterMonthlyBalanceForm(balance, year, month)

			expect(result).toBe(false)
		})
	})

	test('should return false if month is not valid', () => {
		const balance = 42.42
		const year = 2020
		const listOfNotValidMonths = ['patata', '02', 2, '2', 'march']

		listOfNotValidMonths.forEach(month => {
			const result = validateRegisterMonthlyBalanceForm(balance, year, month)

			expect(result).toBe(false)
		})
	})

	test('should return true if receive valid data', () => {
		const listOfMonthlyBalances = [
			{
				balance: -12345.87,
				year: 2020,
				month: 'March'
			},
			{
				balance: 0,
				year: 2037,
				month: 'July'
			},
			{
				balance: 0.00,
				year: 2037,
				month: 'July'
			},
			{
				balance: -0.00,
				year: 2037,
				month: 'July'
			},
			{
				balance: 0.12,
				year: 1978,
				month: 'November'
			},
			{
				balance: 234867.88,
				year: 2021,
				month: 'September'
			},
			{
				balance: 25000.00,
				year: 2003,
				month: 'April'
			}
		]

		listOfMonthlyBalances.forEach(monthlyBalance => {
			const result = validateRegisterMonthlyBalanceForm(monthlyBalance.balance, monthlyBalance.year, monthlyBalance.month)

			expect(result).toBe(true)
		})
	})
})

describe('validateRegisterExpenseForm', () => {
	test('should return false if quantity is not valid', () => {
		const listOfNotValidQuantities = [null, undefined, 'foo', 56.0007777, 0, 0.00, -0.00, '0', '0.00', '-0.00', -42]
		const date = new Date()

		listOfNotValidQuantities.forEach(quantity => {
			const result = validateRegisterExpenseForm(quantity, date)

			expect(result).toBe(false)
		})
	})

	test('should return false if date is not valid', () => {
		const quantity = 123.45
		const listOfNotValidDates = ['foo', null, undefined, 123.45]

		listOfNotValidDates.forEach(date => {
			const result = validateRegisterExpenseForm(quantity, date)

			expect(result).toBe(false)
		})
	})

	test('should return true if receive valid data', () => {
		const listOfValidExpenses = [
			{
				quantity: 12345.87,
				date: new Date()
			},
			{
				quantity: 0.12,
				date: new Date(1588197712263)
			},
			{
				quantity: 234867.88,
				date: new Date(2018, 11, 24, 10, 33, 30, 0)
			},
			{
				quantity: 25000.00,
				date: new Date(2018, 11, 24)
			}
		]

		listOfValidExpenses.forEach(expense => {
			const result = validateRegisterExpenseForm(expense.quantity, expense.date)

			expect(result).toBe(true)
		})
	})
})