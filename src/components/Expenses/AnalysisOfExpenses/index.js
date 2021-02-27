import React from 'react'
import PropTypes from 'prop-types'

// import { parseUnixTimestamp } from '../../../utils/utils'
// import { getNameOfCategoryOrSubcategory } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'

export const AnalysisOfExpenses = ( { expenses, categories } ) => {

	const expensesReversed = expenses.slice(0).reverse()

	if (expensesReversed.length) {
		return <ErrorAlert errorMessage={'WIP - feature not implemented yet'} />
		// return (
		// 	<section className="table-responsive">
		// 		<table className="table text-light">
		// 			<thead>
		// 				<tr>
		// 					<th scope="col">Date</th>
		// 					<th scope="col">Category & subcategory</th>
		// 					<th scope="col">Quantity</th>
		// 					<th scope="col">Actions</th>
		// 				</tr>
		// 			</thead>
		// 			<tbody>
		// 				{
		// 					expensesReversed.map(expense => {
		// 						const nameOfCategory = getNameOfCategoryOrSubcategory(expense.category, categories)
		// 						const nameOfSubcategory = getNameOfCategoryOrSubcategory(expense.subcategory, categories)
		// 						return (
		// 							<tr key={expense.uuid}>
		// 								<td>{parseUnixTimestamp(expense.date).substring(0, 10)}</td>
		// 								<td>{nameOfCategory}{(nameOfSubcategory) ? ` - ${nameOfSubcategory}` : ''}</td>
		// 								<td>{expense.quantity} {expense.currencyISO}</td>
		// 							</tr>
		// 						)
		// 					})
		// 				}
		// 			</tbody>
		// 		</table>
		// 	</section>
		// )
	} else {
		const errorMessage = 'Not enough data'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}


AnalysisOfExpenses.propTypes = {
	expenses: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			subcategory: PropTypes.string,
			quantity: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	),
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.array.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
