import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from './Spinner'
import { ErrorAlert } from './ErrorAlert'
import { GraphExpensesData } from './GraphExpensesData'

import { LIST_ALL_EXPENSES } from '../gql/queries/expenses'

export const GetDataExpenses = () => {
	const { loading, error, data } = useQuery(LIST_ALL_EXPENSES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <GraphExpensesData data={data.getExpenses} />
}