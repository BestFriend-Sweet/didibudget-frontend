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
`;
