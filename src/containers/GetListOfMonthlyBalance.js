import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../components/Spinner'
import { ErrorAlert } from '../components/ErrorAlert'
import { ListOfMonthlyBalance } from '../components/ListOfMonthlyBalance'

import { LIST_ALL_MONTHLY_BALANCE } from '../gql/queries/monthlyBalance'

export const GetListOfMonthlyBalance = () => {
	const { loading, error, data, refetch } = useQuery(LIST_ALL_MONTHLY_BALANCE, { fetchPolicy: 'network-only' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfMonthlyBalance monthlyBalance={data.getMonthlyBalance} refetch={refetch} />
}