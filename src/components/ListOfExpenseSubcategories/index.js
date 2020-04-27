import React from 'react'
import PropTypes from 'prop-types'

export const ListOfExpenseSubcategories = ( { subcategories } ) => {
	if (subcategories.length) {
		return (
			<ul className="list-group list-group-flush">
				{
					subcategories.map((subcategory) => {
						return (
							<a className="list-group-item list-group-item-action" href={`/register-expense/${subcategory.uuid}`} role="button" key={subcategory.uuid}>{subcategory.name}</a>
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
