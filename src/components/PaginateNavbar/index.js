import PropTypes from 'prop-types'
import { createActivePaginationItem, createPaginationItem, createEllipsisPaginationItem, excludeUnusedItems } from './utils'

export const PaginateNavbar = ( { currentPage, totalPages, onChangePage } ) => {
	const handleClick = async (event) => {
		event.preventDefault()
		const selectedPage = parseInt(event.target.value)

		if (selectedPage !== currentPage) {
			onChangePage(selectedPage)
		}
	}

	if (totalPages <= 1) {
		return null
	}

	const adjacentPagesNumberToDisplay = 1
	let previousEllipsisHasAlreadyBeenDisplayed = false
	let nextEllipsisHasAlreadyBeenDisplayed = false

	const paginationItems = Array.from({ length: totalPages }, (_, i) => {
		const pageNumber = i + 1
		const isActivePage = currentPage === pageNumber
		const isFirstPage = pageNumber === 1
		const isLastPage = pageNumber === totalPages
		const isNotInThreshold = pageNumber < (currentPage - adjacentPagesNumberToDisplay) || pageNumber > (currentPage + adjacentPagesNumberToDisplay)

		if (!isFirstPage && !isLastPage && isNotInThreshold) {
			if (pageNumber < currentPage && !previousEllipsisHasAlreadyBeenDisplayed) {
				previousEllipsisHasAlreadyBeenDisplayed = true
				return createEllipsisPaginationItem('previous-ellipsis')
			}

			if (pageNumber > currentPage && !nextEllipsisHasAlreadyBeenDisplayed) {
				nextEllipsisHasAlreadyBeenDisplayed = true
				return createEllipsisPaginationItem('next-ellipsis')
			}

			return null
		  }

		if (isActivePage) {
			return createActivePaginationItem(pageNumber, handleClick)
		}

		return createPaginationItem(pageNumber, handleClick)
	})

	const paginationItemsToDisplay = excludeUnusedItems(paginationItems)

	return (
		<nav aria-label="Paginate the results">
			<ul className="pagination justify-content-center m-4">
				{ paginationItemsToDisplay }
			</ul>
		</nav>
	)
}

PaginateNavbar.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired
}
