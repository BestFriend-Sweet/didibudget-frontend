import React from 'react'
import PropTypes from 'prop-types'

export const ListOfExpenseSubcategories = ( { subcategories } ) => {
	if (subcategories.length) {
		return (
			<ul className="list-group list-group-flush">
				{
					subcategories.map((subcategory) => {
						return (
							<li className="list-group-item list-group-item-action" key={subcategory.uuid}>{subcategory.name}</li>
						)
					})
				}
			</ul>
		)
	}

	return null
}


ListOfExpenseSubcategories.propTypes = {
	subcategories: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
