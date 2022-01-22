import { BsFillCaretDownFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

import { ErrorAlert } from '../../ErrorAlert'
import { ListOfExpenseSubcategories } from '../ListOfExpenseSubcategories'

export const ListOfExpenseCategories = ( { getExpenseCategory } ) => {
	if (getExpenseCategory.length) {
		return (
			<section className="accordion my-5" id="listOfCategories">
				{
					getExpenseCategory.map((category) => {

						const hasSubcategories = (category.subcategories.length) ? true : false

						return (
							<div className="card bg-dark border-info" key={category.uuid}>
								<div className="card-header d-flex p-2 mb-0">
									{
										(hasSubcategories)
											?
												<button className="flex-grow-1 btn btn-link text-left text-light" type="button" data-toggle="collapse" data-target={`#collapse-${category.uuid}`} aria-expanded="true" aria-controls={`collapse-${category.uuid}`}>
													<BsFillCaretDownFill
														size={'16px'}
														title={`Expand the category: ${category.name}`}
														color={'white'}
														className={'mr-2'}
													/>
													{category.name}
												</button>
											:
												<a className="d-flex flex-grow-1 btn btn-link text-left text-light" href={`/register-expense/${category._id}`} role="button">{category.name}</a>
									}
								</div>

								<div id={`collapse-${category.uuid}`} className="collapse" aria-labelledby={`heading-${category.uuid}`} data-parent="#listOfCategories">
									<div className="card-body p-0 pl-1">
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
			subcategories: PropTypes.arrayOf(
				PropTypes.shape({
					_id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					uuid: PropTypes.string.isRequired
				})
			),
			uuid: PropTypes.string.isRequired
		})
	)
}
