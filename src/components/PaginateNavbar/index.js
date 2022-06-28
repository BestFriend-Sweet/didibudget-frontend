import PropTypes from 'prop-types'

export const PaginateNavbar = ( { currentPage, totalPages, fetchMore } ) => {

	const handleClick = async (event) => {
		event.preventDefault()
		const selectedPage = parseInt(event.target.value)

		if (selectedPage !== currentPage) {
			await fetchMore(
				{
					variables: {
						page: selectedPage
					}
				}
			)
		}

		// TODO: Scroll to top of page
	}

	if (totalPages <= 1) {
		return null
	}

	return (
		<nav aria-label="Paginate the results my-5">
			<ul className="pagination justify-content-center m-4">
				{
					Array.from({ length: totalPages }, (_, i) => {
						const pageNumber = i + 1
						const isActive = currentPage === pageNumber

						if (isActive) {
							return (
								<li className="page-item active" key={pageNumber}>
									<button className="page-link" aria-label={`Page ${pageNumber}, current page`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
								</li>
							)
						}

						return (
							<li className="page-item" key={pageNumber}>
								<button className="page-link" aria-label={`Page ${pageNumber}`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}

PaginateNavbar.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	fetchMore: PropTypes.func.isRequired
}
