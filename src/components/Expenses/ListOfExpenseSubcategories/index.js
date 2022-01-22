import PropTypes from 'prop-types'

export const ListOfExpenseSubcategories = ( { categoryID, subcategories } ) => {
	if (subcategories.length) {
		return (
			<ul className="list-group list-group-flush ml-1 mr-2">
				{
					subcategories.map((subcategory) => {
						return (
							<a className="list-group-item list-group-item-action bg-dark text-light border-info ml-3" href={`/register-expense/${categoryID}/${subcategory._id}`} role="button" key={subcategory.uuid}>{subcategory.name}</a>
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
