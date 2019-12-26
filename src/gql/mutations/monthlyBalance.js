import gql from 'graphql-tag';


export const REGISTER_MONTHLY_BALANCE = gql`
mutation registerMonthlyBalance($balance: Float!, $date: String!) {
	registerMonthlyBalance(balance: $balance, date: $date) {
		balance
		date
		currencyISO
		uuid
	}
}
`

export const DELETE_MONTHLY_BALANCE = gql`
mutation deleteMonthlyBalance($uuid: String!) {
	deleteMonthlyBalance(uuid: $uuid) {
		balance
		date
		currencyISO
		uuid
	}
}
`;