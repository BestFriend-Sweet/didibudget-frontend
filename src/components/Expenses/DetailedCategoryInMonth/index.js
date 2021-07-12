import PropTypes from 'prop-types'

import { getNameOfCategoryOrSubcategory } from '../utils'

export const DetailedCategoryInMonth = ( { displaySubcategories, categoryInMonth, categories } ) => {

	const hasSubcategories = categoryInMonth.perSubcategory.length

	if (!hasSubcategories) {
		return null
	}

	return (
		displaySubcategories && <tr>
			<td colSpan="2" className="pt-0 pb-4 text-info">
				{
					categoryInMonth.perSubcategory.map(subcategory => {
						const nameOfSubcategory = getNameOfCategoryOrSubcategory(subcategory.uuidSubcategory, categories)
						return (
							<div className="ml-4 py-2 pl-2 d-flex border border-info border-top-0 border-bottom-0 border-right-0" key={subcategory.uuidSubcategory} >
								<div className="mr-auto px-2">{nameOfSubcategory}</div>
								<div className="px-2 text-nowrap text-right">{subcategory.totalInSubcategory} EUR</div>
							</div>
						)
					})
				}
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
