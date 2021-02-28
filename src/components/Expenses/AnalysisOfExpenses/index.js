import React from 'react'
import PropTypes from 'prop-types'

import { getDetailedExpendesPerMonth } from '../utils'

import { ErrorAlert } from '../../ErrorAlert'
import { DetailedMonth } from '../DetailedMonth'

export const AnalysisOfExpenses = ( { expenses, categories } ) => {
	if (expenses.length) {
		const expensesData = getDetailedExpendesPerMonth(expenses)
		//const reversedData = expensesFormatted.slice(0).reverse() // TODO: mostrar los meses más nuevos arriba y los más antiguos abajo
		//console.log('reversedData')
		//console.log(reversedData)
		//console.log('expensesData')
		//console.log(expensesData)
		return (
			<section className="pt-4">
				{
					expensesData.map(monthData => {
						return (
							<DetailedMonth monthData={monthData} categories={categories} key={monthData.month}/>
						)
					})
				}
			</section>
		)
	} else {
		const errorMessage = 'Not enough data'
		return <ErrorAlert errorMessage={errorMessage} />
	}
}


AnalysisOfExpenses.propTypes = {
	expenses: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			subcategory: PropTypes.string,
			quantity: PropTypes.number.isRequired,
			currencyISO: PropTypes.string.isRequired
		})
	),
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			subcategories: PropTypes.array.isRequired,
			uuid: PropTypes.string.isRequired
		})
	)
}
