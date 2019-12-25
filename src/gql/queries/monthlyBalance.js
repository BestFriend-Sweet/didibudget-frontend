import gql from 'graphql-tag'

export const LIST_ALL_MONTHLY_BALANCE = gql`
query getMonthlyBalance{
	getMonthlyBalance{
		balance,
		date,
		currencyISO,
		uuid 
	}
}
`;
