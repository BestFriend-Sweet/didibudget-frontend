const createActivePaginationItem = (pageNumber, handleClick) => {
	return (
		<li className="page-item active" key={pageNumber}>
			<button className="page-link" aria-label={`Page ${pageNumber}`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
		</li>
	)
}

const createPaginationItem = (pageNumber, handleClick) => {
	return (
		<li className="page-item" key={pageNumber}>
			<button className="page-link" aria-label={`Page ${pageNumber}`} value={pageNumber} onClick={e => handleClick(e)}>{pageNumber}</button>
		</li>
	)
}

const createEllipsisPaginationItem = (identifier) => {
	return (
		<li className="page-item disabled" key={identifier}>
			<span className="page-link" tabIndex="-1" aria-disabled="true">...</span>
		</li>
	)
}

const excludeUnusedItems = (paginationItems) => {
	return paginationItems.filter(items  => items !== null)
}

export {
	createActivePaginationItem,
	createPaginationItem,
	createEllipsisPaginationItem,
	excludeUnusedItems
}