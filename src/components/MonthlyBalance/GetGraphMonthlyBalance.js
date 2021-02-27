import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { GraphMonthlyBalance } from './GraphMonthlyBalance'

import { LIST_ALL_MONTHLY_BALANCE } from '../../gql/queries/monthlyBalance'

export const GetGraphMonthlyBalance = () => {
	const { loading, error, data } = useQuery(LIST_ALL_MONTHLY_BALANCE, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <GraphMonthlyBalance data={data.getMonthlyBalance} />
}