import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Spinner } from '../components/Spinner'
import { ErrorAlert } from '../components/ErrorAlert'
import { GraphMonthlyBalance } from '../components/GraphMonthlyBalance'

import { LIST_ALL_MONTHLY_BALANCE } from '../gql/queries/monthlyBalance'

export const GetGraphMonthlyBalance = () => {
	const { loading, error, data } = useQuery(LIST_ALL_MONTHLY_BALANCE, { fetchPolicy: 'network-only' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <GraphMonthlyBalance data={data.getMonthlyBalance} />
}