import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../components/Spinner'
import { ErrorAlert } from '../components/ErrorAlert'
import { ListOfExpenses } from '../components/ListOfExpenses'

import { LIST_ALL_EXPENSES_AND_CATEGORIES } from '../gql/queries/expenses'

export const GetListOfExpenses = () => {
	const { loading, error, data, refetch } = useQuery(LIST_ALL_EXPENSES_AND_CATEGORIES, { fetchPolicy: 'network-only' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfExpenses expenses={data.getExpenses} categories={data.getExpenseCategory} refetch={refetch} />
}