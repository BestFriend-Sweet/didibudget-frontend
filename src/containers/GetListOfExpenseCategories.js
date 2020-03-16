import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Spinner } from '../components/Spinner'
import { ErrorAlert } from '../components/ErrorAlert'
import { ListOfExpenseCategories } from '../components/ListOfExpenseCategories'

import { LIST_EXPENSE_CATEGORIES } from '../gql/queries/expenseCategories'

export const GetListOfExpenseCategories = () => {
	const { loading, error, data } = useQuery(LIST_EXPENSE_CATEGORIES, { fetchPolicy: 'network-only' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfExpenseCategories getExpenseCategory={data.getExpenseCategory} />
}