import gql from 'graphql-tag'

export const LIST_EXPENSE_CATEGORIES = gql`
{
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

export const GET_EXPENSE_CATEGORY_BY_ID = gql`
query getExpenseCategoryById($category: ID!) {
	getExpenseCategoryById(category: $category) {
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