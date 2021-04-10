import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { FaPiggyBank, FaListUl } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'

import { useWindowSize } from '../../hooks/useWindowSize'

export const MonthlyBalanceDropdown = (props) => {
	const size = useWindowSize()
	const largeBreakPoint = 992
	const isDropdownExpanded = size.width <= largeBreakPoint

	return (
		<div className={`dropdown ${ isDropdownExpanded ? 'position-static' : '' }`}>
			<button className="navbar-item btn btn-link text-light font-weight-bold pt-2 dropdown-toggle" id="monthly-balance-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<FaPiggyBank size={props.sizeOfPrimaryIcons} title='Monthly Balance' />
			</button>
			<div className={`dropdown-menu ${ isDropdownExpanded ? 'w-100' : '' }`} aria-labelledby="monthly-balance-dropdown">
				<span className="dropdown-item-text text-muted">Monthly Balance</span>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item py-3" to='/register-monthly-balance'>
					<FaPiggyBank size={props.sizeOfSecondaryIcons} title='Register monthly balance' /><span className="ml-3">Register Monthly Balance</span>
				</Link>
				<Link className="dropdown-item py-3" to='/view-monthly-balance'>
					<GoGraph size={props.sizeOfSecondaryIcons} title='View monthly balance'/><span className="ml-3">View Monthly Balance</span>
				</Link>
				<Link className="dropdown-item py-3" to='/monthly-balance-administration'>
					<FaListUl size={props.sizeOfSecondaryIcons} title='Monthly balance administration'/><span className="ml-3">Monthly Balance Administration</span>
				</Link>
			</div>
		</div>
	)
}

MonthlyBalanceDropdown.propTypes = {
	sizeOfPrimaryIcons: PropTypes.string.isRequired,
	sizeOfSecondaryIcons: PropTypes.string.isRequired,
}