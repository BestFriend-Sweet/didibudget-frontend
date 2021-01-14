/**
* Parse the data of expenses to obtain the sum per month. This function refill the empty data of every month and do a sum of every months.
* @example
* 	const data = [{'quantity': 3, 'date': '2020-10-31'},{'quantity': 99.03, 'date': '2020-10-31'}]
* 	getSumPerMonth(data) // { label: 'October 2020', sum: 102.03 }
* @param  {.<Object>} data - An array of objects (the object must contain a date property. The array must be ordered in date ascendant)
* @param  {String} data.date - A valid date with this format '2018-03-01'
* @param  {float|integer} data.quantity
* @return {Array.<Object>}
*/
const getSumPerMonth = (data = []) => {
	if (!data.length) {
		return []
	}

	const preparedData = data.map(element => {
		return {
			label: new Date(element.date).toLocaleDateString('en-EN', { year: 'numeric', month: 'long' }),
			sum: element.quantity
		}
	})

	const result = []
	const allLabelsInResult = []
	preparedData.forEach((element) => {
		if (allLabelsInResult.includes(element.label)){
			result.forEach((item) => {
				if(item.label === element.label) {
					item.sum += element.sum
				}
			})
		} else {
			result.push(element)
			allLabelsInResult.push(element.label)
		}
	})

	return result
}

export {
	getSumPerMonth,
}
