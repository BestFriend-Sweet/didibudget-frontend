import PropTypes from 'prop-types'

export const ListOfExpenseSubcategories = ( { categoryID, subcategories } ) => {
	if (subcategories.length) {
		return (
			<ul className="list-group list-group-flush">
				{
					subcategories.map((subcategory) => {
						return (
							<a className="list-group-item list-group-item-action" href={`/register-expense/${categoryID}/${subcategory._id}`} role="button" key={subcategory.uuid}>{subcategory.name}</a>
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
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired
		})
	),
	categoryID: PropTypes.string.isRequired
}
