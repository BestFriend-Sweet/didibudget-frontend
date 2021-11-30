import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import { getNameOfCategoryOrSubcategory } from '../utils'

import { DetailedCategoryInMonth } from '../DetailedCategoryInMonth'
import { ToggleButton } from '../../ToggleButton'

export const DetailedMonth = ( { monthData, categories } ) => {

	const [toggleState, setToggleState] = useState(false)

	const onToggleDetailedInformation = (toggleState) => {
		setToggleState(toggleState)
	}

	const hasSubcategories = monthData.perCategory.some(category => !!category.perSubcategory.length)

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
							const nameOfCategory = getNameOfCategoryOrSubcategory(category.idCategory, categories)
							
							return (
								<Fragment key={category.idCategory}>
									<tr key={category.idCategory}>
										<td>{nameOfCategory}</td>
										<td className="text-nowrap text-right">{category.totalInCategory} EUR</td>
									</tr>
									<DetailedCategoryInMonth
										displaySubcategories={toggleState}
										categoryInMonth={category}
										categories={categories}
									/>
								</Fragment>
							)
						})
					}
				</tbody>
			</table>
			{
				hasSubcategories && <div className="ml-2">
					<ToggleButton
						text='Show detailed information'
						defaultState={toggleState}
						onToggle={onToggleDetailedInformation}
						isDisabled={!hasSubcategories}
					/>
				</div>
			}
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
			subcategories: PropTypes.arrayOf(
				PropTypes.shape({
					_id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					uuid: PropTypes.string.isRequired
				})
			),
			uuid: PropTypes.string.isRequired
		})
	)
}
