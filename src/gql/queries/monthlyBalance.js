import gql from 'graphql-tag'

export const LIST_ALL_MONTHLY_BALANCE = gql`
query getMonthlyBalances {
	getMonthlyBalances {
		balance,
		date,
		currencyISO,
		uuid 
	}
}
`
