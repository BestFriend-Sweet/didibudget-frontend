import gql from 'graphql-tag'

export const LIST_ALL_EXPENSES = gql`
query getExpenses {
	getExpenses {
		category
		subcategory
		quantity
		date
		currencyISO
		uuid
	}
}
`

export const LIST_ALL_EXPENSES_AND_CATEGORIES = gql`
query {
	getExpenses {
		category
		subcategory
		quantity
		date
		currencyISO
		uuid
	}
	getExpenseCategory {
		_id
		name
		subcategories {
			_id
			name
			uuid
		}
		uuid
	}
}
`

export const LIST_ALL_EXPENSES_WITH_PAGINATION_AND_CATEGORIES = gql`
query ($page: Int!, $pageSize: Int!) {
	getExpensesWithPagination (page: $page, pageSize: $pageSize) {
		expenses {
			category
			subcategory
			quantity
			date
			currencyISO
			uuid
		}
		pagination {
			currentPage
			totalPages
		}
	}
	getExpenseCategory {
		_id
		name
		subcategories {
			_id
			name
			uuid
		}
		uuid
	}
}
`
