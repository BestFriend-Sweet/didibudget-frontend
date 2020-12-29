import gql from 'graphql-tag'


export const REGISTER_EXPENSE = gql`
mutation registerExpense($category: ID!,$subcategory: ID, $quantity: Float!, $date: String!) {
	registerExpense(category: $category, subcategory: $subcategory, quantity: $quantity, date: $date) {
		quantity
		date
		currencyISO
		uuid
	}
}
`

export const DELETE_EXPENSE = gql`
mutation deleteExpense($uuid: String!) {
	deleteExpense(uuid: $uuid) {
    category
    subcategory
		quantity
		date
		currencyISO
		uuid
	}
}
`