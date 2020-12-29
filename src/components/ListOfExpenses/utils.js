/**
 * Get name of category or subcategory using provided data.
 * @param  {String} target 		MongoDB identifier of category or subcategory
 * @param  {Array} categories 	Array with all categories and subcategories
 * @return {String|null}
 */
function getNameOFCategoryOrSubcategory(target, categories) {
	if (target === null || categories.length === 0) {
		return null
	}

	let result = null

	categories.forEach(category => {
		if (category._id === target) {
			result = category.name
		}

		category.subcategories.forEach(subcategory =>{
			if (subcategory._id === target) {
				result = subcategory.name
			}
		})
	})

	return result
}


module.exports = {
	getNameOFCategoryOrSubcategory
}
