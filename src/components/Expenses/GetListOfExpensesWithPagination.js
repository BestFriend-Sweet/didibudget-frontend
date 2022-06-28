import { useQuery } from '@apollo/client'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { ListOfExpenses } from './ListOfExpenses'

import { LIST_ALL_EXPENSES_WITH_PAGINATION_AND_CATEGORIES } from '../../gql/queries/expenses'

export const GetListOfExpensesWithPagination = () => {
	const defaultPage = 1
	const defaultPageSize = 20

	const { loading, error, data, refetch, fetchMore } = useQuery(LIST_ALL_EXPENSES_WITH_PAGINATION_AND_CATEGORIES, { variables: { page: defaultPage, pageSize: defaultPageSize }, fetchPolicy: 'no-cache', notifyOnNetworkStatusChange: true })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <ListOfExpenses expenses={data.getExpensesWithPagination.expenses} paginationData={data.getExpensesWithPagination.pagination} categories={data.getExpenseCategory} refetch={refetch} fetchMore={fetchMore} />
}