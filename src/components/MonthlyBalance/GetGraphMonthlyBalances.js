import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { GraphMonthlyBalance } from './GraphMonthlyBalance'

import { LIST_ALL_MONTHLY_BALANCES } from '../../gql/queries/monthlyBalances'

export const GetGraphMonthlyBalances = () => {
	const { loading, error, data } = useQuery(LIST_ALL_MONTHLY_BALANCES, { fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <GraphMonthlyBalance data={data.getMonthlyBalances} />
}