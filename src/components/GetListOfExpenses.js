import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from './Spinner'
import { ErrorAlert } from './ErrorAlert'
import { ListOfExpenses } from './ListOfExpenses'

import { LIST_ALL_EXPENSES_AND_CATEGORIES } from '../gql/queries/expenses'

export const GetListOfExpenses = () => {
	const { loading, error, data, refetch } = useQuery(LIST_ALL_EXPENSES_AND_CATEGORIES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfExpenses expenses={data.getExpenses} categories={data.getExpenseCategory} refetch={refetch} />
}