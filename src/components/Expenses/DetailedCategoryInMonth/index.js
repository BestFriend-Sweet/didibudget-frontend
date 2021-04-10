import React from 'react'
import PropTypes from 'prop-types'

import { getNameOfCategoryOrSubcategory } from '../utils'

export const DetailedCategoryInMonth = ( { displaySubcategories, categoryInMonth, categories } ) => {

	const hasSubcategories = !!categoryInMonth.perSubcategory.length

	return (
		hasSubcategories && displaySubcategories && <tr>
			<td colSpan="2">
				<table className="table table-warning table-borderless table-sm">
					<tbody>
						{
							categoryInMonth.perSubcategory.map(subcategory => {
								const nameOfSubcategory = getNameOfCategoryOrSubcategory(subcategory.uuidSubcategory, categories)
								return (
									<tr key={subcategory.uuidSubcategory}>
										<td>{nameOfSubcategory}</td>
										<td className="text-nowrap text-right">{subcategory.totalInSubcategory} EUR</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</td>
		</tr>	
	)
}

DetailedCategoryInMonth.propTypes = {
	displaySubcategories: PropTypes.bool.isRequired,
	categoryInMonth: PropTypes.shape({
		uuidCategory: PropTypes.string.isRequired,
		totalInCategory: PropTypes.number.isRequired,
		perSubcategory: PropTypes.array.isRequired,
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
