import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getNameOfCategoryOrSubcategory } from '../utils'

export const DetailedMonth = ( { monthData, categories } ) => {
	
	// TODO: hacer que las subcategorías se puedan expandir => mejor una tabla dentro de otra!

	// Estoy usando la librería 'md5' ??? la puedo desinstalar ??
	console.log('monthData', monthData)
	return (
		<section className="table-responsive mb-5">
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
							
							const subcategoriesCollapsed = category.perSubcategory.map(subcategory => {
								const nameOfSubcategory = getNameOfCategoryOrSubcategory(subcategory.uuidSubcategory, categories)
								return (
									<tr key={subcategory.uuidSubcategory}>
										<td>{nameOfSubcategory}</td>
										<td className="text-nowrap">{subcategory.totalInSubcategory} EUR</td>
									</tr>
								)
							})

							return (
								<Fragment key={category.uuidCategory}>
									<tr key={category.uuidCategory}>
										<td>{nameOfCategory}</td>
										<td className="text-nowrap">{category.totalInCategory} EUR</td>
									</tr>

									<tr>
										<td colSpan="2">
											<table className="table table-light table-sm">
												<thead>
													<tr>
														<th scope="col" colSpan="2">Breakdown of: {nameOfCategory}</th>	
													</tr>
												</thead>
												<tbody>
													{ subcategoriesCollapsed }
												</tbody>
											</table>
										</td>
									</tr>
								</Fragment>
							)
						})
					}
				</tbody>
			</table>
		</section>
	)
}


DetailedMonth.propTypes = {
	monthData: PropTypes.shape({
		month: PropTypes.string.isRequired,
		totalInMonth: PropTypes.number.isRequired,
		perCategory: PropTypes.array.isRequired,
	}),
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.array.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
