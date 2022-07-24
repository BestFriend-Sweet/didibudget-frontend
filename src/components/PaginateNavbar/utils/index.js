/**
 * Create a pagination item for the pagination navbar (active status)
 * @param {integer} pageNumber
 * @param {Function} handleClick
 * @returns {Element}
 */
const createActivePaginationItem = (pageNumber, handleClick) => {
	return (
		<li className="page-item active" key={pageNumber}>
			<button className="page-link bg-info text-light border-info" aria-label={`Page ${pageNumber}`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
		</li>
	)
}

/**
 * Create a pagination item for the pagination navbar
 * @param {integer} pageNumber
 * @param {Function} handleClick
 * @returns {Element}
 */
const createPaginationItem = (pageNumber, handleClick) => {
	return (
		<li className="page-item" key={pageNumber}>
			<button className="page-link bg-dark text-light border-info" aria-label={`Page ${pageNumber}`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
		</li>
	)
}

/**
 * Create a pagination item for the pagination navbar (ellipsis)
 * @param {string} identifier
 * @returns {Element}
 */
const createEllipsisPaginationItem = (identifier) => {
	return (
		<li className="page-item disabled" key={identifier}>
			<span className="page-link bg-dark text-light border-info" tabIndex="-1" aria-disabled="true">…</span>
		</li>
	)
}

/**
 * Exclude null values from the pagination items
 * @param {Array<Element|null>} paginationItems
 * @returns {Array<Element>}
 */
const excludeUnusedItems = (paginationItems) => {
	return paginationItems.filter(items  => items !== null)
}

export {
	createActivePaginationItem,
	createPaginationItem,
	createEllipsisPaginationItem,
	excludeUnusedItems
}