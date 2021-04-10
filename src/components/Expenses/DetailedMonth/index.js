import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getNameOfCategoryOrSubcategory } from '../utils'

import { DetailedCategoryInMonth } from '../DetailedCategoryInMonth'

export const DetailedMonth = ( { monthData, categories } ) => {

	// TODO: displaySubcategories => pasarle un boolean en función de si el usuario quiere expandir las subcategorías para éste mes
	return (
		<section className="table-responsive mb-5">
			<table className="table table-dark">
				<thead>
					<tr className="table-info text-dark">
						<th scope="col" className="text-nowrap">{monthData.month}</th>
						<th scope="col" className="text-nowrap text-right">{monthData.totalInMonth} EUR</th>
					</tr>
				</thead>
				<tbody>
					{
						monthData.perCategory.map(category => {
							const nameOfCategory = getNameOfCategoryOrSubcategory(category.uuidCategory, categories)
							
							return (
								<Fragment key={category.uuidCategory}>
									<tr key={category.uuidCategory}>
										<td>{nameOfCategory}</td>
										<td className="text-nowrap text-right">{category.totalInCategory} EUR</td>
									</tr>

									<DetailedCategoryInMonth displaySubcategories={false} categoryInMonth={category} categories={categories} />
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
