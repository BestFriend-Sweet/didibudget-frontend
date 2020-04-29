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
`;