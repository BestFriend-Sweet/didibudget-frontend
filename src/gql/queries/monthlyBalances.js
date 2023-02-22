import gql from 'graphql-tag'

export const LIST_ALL_MONTHLY_BALANCES = gql`
query getMonthlyBalances {
	getMonthlyBalances {
		balance,
		date,
		currencyISO,
		uuid
	}
}
`

export const LIST_ALL_MONTHLY_BALANCES_WITH_PAGINATION = gql`
query getMonthlyBalancesWithPagination ($page: Int!, $pageSize: Int!) {
	getMonthlyBalancesWithPagination (page: $page, pageSize: $pageSize) {
		monthlyBalances {
			balance,
			date,
			currencyISO,
			uuid 
		}
		pagination {
			currentPage
			totalPages
		}
	}
}
`
