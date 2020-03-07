import React, { Fragment } from 'react'

import { RegisterMonthlyBalance } from '../containers/RegisterMonthlyBalance'

import { PageTitle } from '../components/PageTitle'
import { RegisterMonthlyBalanceForm } from '../components/RegisterMonthlyBalanceForm'


const InsertMonthlyBalance = () => {
	return (
		<Fragment>
			<PageTitle text='Register monthly balance' />
			<RegisterMonthlyBalance>
				{
					(registerMonthlyBalance, { data, loading, error }) => { // eslint-disable-line no-unused-vars
						const onSubmit = ({ balance, date }) => {
							const variables = { balance: parseFloat(balance), date };
							registerMonthlyBalance({ variables }).then(({ data }) => {
								window.location.href = '/view-monthly-balance'
							}).catch(e => {
								console.error(e.message) // eslint-disable-line no-console
							})
						}

						const errorMsg = error && 'Data provided is not valid'

						return <RegisterMonthlyBalanceForm disabled={loading} error={errorMsg} onSubmit={onSubmit} />
					}
				}
			</RegisterMonthlyBalance>
		</Fragment>
	)
}

InsertMonthlyBalance.displayName = 'InsertMonthlyBalance'

export default InsertMonthlyBalance
