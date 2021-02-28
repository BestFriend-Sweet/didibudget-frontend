import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import md5 from 'md5'

import { getDetailedExpendesPerMonth, getNameOfCategoryOrSubcategory } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'
import { EmojiMagnifyingGlass } from '../../EmojiMagnifyingGlass'

export const AnalysisOfExpenses = ( { expenses, categories } ) => {
	if (expenses.length) {
		const expensesData = getDetailedExpendesPerMonth(expenses)
		console.log(expensesData)
		// TODO: hacer que las subcategorías se puedan expandir

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
												const idToExpandSubcategory = md5(`${monthData.month}${category.uuidCategory}`)

												const subcategoriesCollapsed = category.perSubcategory.map(subcategory => {
													const nameOfSubcategory = getNameOfCategoryOrSubcategory(subcategory.uuidSubcategory, categories)
													return (
														<tr key={subcategory.uuidSubcategory} className={`collapse table-light text-dark table-sm ${idToExpandSubcategory}`}>
															<td>{nameOfSubcategory}</td>
															<td className="text-nowrap">{subcategory.totalInSubcategory} EUR</td>
														</tr>
													)
												})

												const opts = {}
												if (category.perSubcategory.length) {
													opts['data-toggle'] = 'collapse'
													opts['data-target'] = `.${idToExpandSubcategory}`
												}
												return (
													<Fragment key={category.uuidCategory}>
														<tr key={category.uuidCategory} {...opts}>
															<td>{nameOfCategory} {category.perSubcategory.length ? <EmojiMagnifyingGlass />: ''}</td>
															<td className="text-nowrap">{category.totalInCategory} EUR</td>
														</tr>
														{ subcategoriesCollapsed }
													</Fragment>
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
