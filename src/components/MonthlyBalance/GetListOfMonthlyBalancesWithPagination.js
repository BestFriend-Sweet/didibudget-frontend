import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { ListOfMonthlyBalances } from './ListOfMonthlyBalances'

import { LIST_ALL_MONTHLY_BALANCES_WITH_PAGINATION } from '../../gql/queries/monthlyBalances'

export const GetListOfMonthlyBalancesWithPagination = () => {
	const defaultPage = 1
	const defaultPageSize = 25

	const [page, setPage] = useState(defaultPage)

	const onChangePage = (selectedPage) => {
		setPage(selectedPage)
		fetchMore({
			variables: {
				page: page,
			},
		})
	}

	const { loading, error, data, refetch, fetchMore } = useQuery(LIST_ALL_MONTHLY_BALANCES_WITH_PAGINATION, { variables: { page: page, pageSize: defaultPageSize }, fetchPolicy: 'no-cache', notifyOnNetworkStatusChange: true })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfMonthlyBalances monthlyBalances={data.getMonthlyBalancesWithPagination.monthlyBalances} paginationData={data.getMonthlyBalancesWithPagination.pagination} refetch={refetch} onChangePage={onChangePage} />
}