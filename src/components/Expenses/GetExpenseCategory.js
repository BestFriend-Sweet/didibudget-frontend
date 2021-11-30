import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

import { Spinner } from '../Spinner'
import { ErrorAlert } from '../ErrorAlert'
import { RegisterExpenseForm } from './RegisterExpenseForm'

import { GET_EXPENSE_CATEGORY_BY_ID } from '../../gql/queries/expenseCategories'

export const GetExpenseCategory = ({props}) => {
	const subcategoryID = props['*'] || null
	const categoryID = props.categoryID

	const { loading, error, data } = useQuery(GET_EXPENSE_CATEGORY_BY_ID, { variables: { category: categoryID }, fetchPolicy: 'no-cache' })

	if (loading) return <Spinner />
	if (error) return <ErrorAlert errorMessage={error.message} />

	return <RegisterExpenseForm selectedCategoryID={categoryID} selectedSubcategoryID={subcategoryID} categoryData={data.getExpenseCategoryById} />
}

RegisterExpenseForm.propTypes = {
	props: PropTypes.shape({
		'*': PropTypes.string.isRequired,
		categoryID: PropTypes.string.isRequired,
	})
}