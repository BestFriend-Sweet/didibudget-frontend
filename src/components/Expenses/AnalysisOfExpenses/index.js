import React from 'react'
import PropTypes from 'prop-types'

import { getDetailedExpendesPerMonth, getNameOfCategoryOrSubcategory } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'

export const AnalysisOfExpenses = ( { expenses, categories } ) => {
	if (expenses.length) {
		const expensesData = getDetailedExpendesPerMonth(expenses)
		console.log(expensesData)
		// TODO: hacer que las subcategorías se puedan expandir
		// return (
		// 	<table className="table">
		// 	<thead>
		// 	  <tr>
		// 		<th></th>
		// 		<th>Order Number</th>
		// 		<th>Order Date</th>
		// 		<th>Total Price</th>
		// 	  </tr>
		// 	</thead>
		// 	<tbody>
		// 	  <tr data-toggle="collapse" data-target=".order2">
		// 		<td>&gt;</td>
		// 		<td>1002</td>
		// 		<td>9/27/2016</td>
		// 		<td>$92.15</td>
		// 	  </tr>
		// 	  <tr className="collapse order2">
		// 		<td>2</td>
		// 		<td></td>
		// 		<td>Item</td>
		// 		<td>$12.27</td>
		// 	  </tr>
		// 	  <tr className="collapse order2">
		// 		<td>2</td>
		// 		<td></td>
		// 		<td>Item</td>
		// 		<td>$62.27</td>
		// 	  </tr>
		// 	  <tr>
		// 		<td>&gt;</td>
		// 		<td>1003</td>
		// 		<td>9/01/2016</td>
		// 		<td>$23.55</td>
		// 	  </tr>
		// 	</tbody>
		//   </table>
	  
		// )
		return (
			<section className="pt-4">
				{
					expensesData.map(monthData => {
						return (
							<section className="table-responsive mb-5" key={monthData.month}>
								<table className="table table-dark table-hover">
									<thead>
										<tr className="table-info text-dark">
											<th scope="col" className="text-nowrap">{monthData.month}</th>
											<th scope="col" className="text-nowrap">{monthData.totalInMonth} EUR</th>
										</tr>
									</thead>
									<tbody>
										{
											monthData.perCategory.map(category => {
												const nameOfCategory = getNameOfCategoryOrSubcategory(category.uuidCategory, categories)
												// const nameOfSubcategory = getNameOfCategoryOrSubcategory(expense.subcategory, categories)
												return (
													<tr key={category.uuidCategory}>
														<td>{nameOfCategory}</td>
														<td className="text-nowrap">{category.totalInCategory} EUR</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</section>
						)
					})
				}
			</section>
		)
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
