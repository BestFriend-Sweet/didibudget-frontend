import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from './Spinner'
import { ErrorAlert } from './ErrorAlert'
import { DisplayExpensesData } from './DisplayExpensesData'

import { LIST_ALL_EXPENSES } from '../gql/queries/expenses'

export const GetDataExpenses = () => {
	const { loading, error, data } = useQuery(LIST_ALL_EXPENSES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <DisplayExpensesData data={data.getExpenses} />
}