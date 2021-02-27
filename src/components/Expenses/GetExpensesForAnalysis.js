import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { AnalysisOfExpenses } from './AnalysisOfExpenses'

import { LIST_ALL_EXPENSES_AND_CATEGORIES } from '../../gql/queries/expenses'

export const GetExpensesForAnalysis = () => {
	const { loading, error, data } = useQuery(LIST_ALL_EXPENSES_AND_CATEGORIES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <AnalysisOfExpenses expenses={data.getExpenses} categories={data.getExpenseCategory} />
}