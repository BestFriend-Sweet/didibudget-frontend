import React from 'react'
import PropTypes from 'prop-types'

import { ErrorAlert } from '../../ErrorAlert'
import { ListOfExpenseSubcategories } from '../../ListOfExpenseSubcategories'

export const ListOfExpenseCategories = ( { getExpenseCategory } ) => {
	if (getExpenseCategory.length) {
		return (
			<section className="accordion mt-5" id="listOfCategories">
				{
					getExpenseCategory.map((category) => {

						const hasSubcategories = (category.subcategories.length) ? true : false

						return (
							<div className="card" key={category.uuid}>
								<div className="card-header" id={`heading-${category.uuid}`}>
									<h2 className="mb-0">

										{
											(hasSubcategories)
												?
													<button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse-${category.uuid}`} aria-expanded="true" aria-controls={`collapse-${category.uuid}`}>{category.name} <span className="text-dark mr-2"> ❖ </span>
													</button>
												:
													<a className="btn btn-link" href={`/register-expense/${category._id}`} role="button">{category.name}</a>
										}
									</h2>
								</div>

								<div id={`collapse-${category.uuid}`} className="collapse" aria-labelledby={`heading-${category.uuid}`} data-parent="#listOfCategories">
									<div className="card-body">
										<ListOfExpenseSubcategories categoryID={category._id} subcategories={category.subcategories}/>
									</div>
								</div>
						  </div>
						)
					})
				}
			</section>
		)
	} else {
		const errorMessage = 'There are no categories yet'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}


ListOfExpenseCategories.propTypes = {
	getExpenseCategory: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.array.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
