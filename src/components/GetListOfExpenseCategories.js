import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from './Spinner'
import { ErrorAlert } from './ErrorAlert'
import { ListOfExpenseCategories } from './ListOfExpenseCategories'

import { LIST_EXPENSE_CATEGORIES } from '../gql/queries/expenseCategories'

export const GetListOfExpenseCategories = () => {
	const { loading, error, data } = useQuery(LIST_EXPENSE_CATEGORIES, { fetchPolicy: 'no-cache' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfExpenseCategories getExpenseCategory={data.getExpenseCategory} />
}