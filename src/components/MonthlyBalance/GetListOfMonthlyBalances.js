import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { ListOfMonthlyBalances } from './ListOfMonthlyBalances'

import { LIST_ALL_MONTHLY_BALANCES } from '../../gql/queries/monthlyBalances'

export const GetListOfMonthlyBalances = () => {
	const { loading, error, data, refetch } = useQuery(LIST_ALL_MONTHLY_BALANCES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfMonthlyBalances monthlyBalances={data.getMonthlyBalances} refetch={refetch} />
}