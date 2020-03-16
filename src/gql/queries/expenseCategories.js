import gql from 'graphql-tag'

export const LIST_EXPENSE_CATEGORIES = gql`
{
	getExpenseCategory {
		name
		subcategories {
			name
			uuid
		}
		uuid
	}
}
`;