import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { FaListUl, FaRegCreditCard } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'

import { useWindowSize } from '../../hooks/useWindowSize'

export const ExpensesDropdown = (props) => {
	const size = useWindowSize()
	const largeBreakPoint = 992
	const isDropdownExpanded = size.width <= largeBreakPoint

	return (
		<div className={`dropdown ${ isDropdownExpanded ? 'position-static' : '' }`}>
			<Link className="navbar-item text-light font-weight-bold pt-2 dropdown-toggle" to='/list-expense-categories' id="expenses-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<FaRegCreditCard size={props.sizeOfPrimaryIcons} title='Expenses' />
			</Link>
			<div className={`dropdown-menu ${ isDropdownExpanded ? 'w-100' : '' }`} aria-labelledby="expenses-dropdown">
				<span className="dropdown-item-text text-muted">Expenses</span>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item py-3" to='/list-expense-categories'>
					<FaRegCreditCard size={props.sizeOfSecondaryIcons} title='Register Expense'/><span className="ml-3">Register Expense</span>
				</Link>
				<Link className="dropdown-item py-3" to='/view-expenses'>
					<GoGraph size={props.sizeOfSecondaryIcons} title='View expenses'/><span className="ml-3">View Expenses</span>
				</Link>
				<Link className="dropdown-item py-3" to='/expenses-administration'>
					<FaListUl size={props.sizeOfSecondaryIcons} title='Expenses administration' /><span className="ml-3">Expenses Administration</span>
				</Link>
			</div>
		</div>
	)
}

ExpensesDropdown.propTypes = {
	sizeOfPrimaryIcons: PropTypes.string.isRequired,
	sizeOfSecondaryIcons: PropTypes.string.isRequired,
}