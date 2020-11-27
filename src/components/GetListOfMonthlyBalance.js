import React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from './Spinner'
import { ErrorAlert } from './ErrorAlert'
import { ListOfMonthlyBalance } from './ListOfMonthlyBalance'

import { LIST_ALL_MONTHLY_BALANCE } from '../gql/queries/monthlyBalance'

export const GetListOfMonthlyBalance = () => {
	const { loading, error, data, refetch } = useQuery(LIST_ALL_MONTHLY_BALANCE, { fetchPolicy: 'no-cache' });

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfMonthlyBalance monthlyBalance={data.getMonthlyBalance} refetch={refetch} />
}