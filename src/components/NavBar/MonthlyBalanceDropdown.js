import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { BsPiggyBank, BsGraphUp, BsListUl } from 'react-icons/bs'

import { useWindowSize } from '../../hooks/useWindowSize'

export const MonthlyBalanceDropdown = (props) => {
	const size = useWindowSize()
	const largeBreakPoint = 992
	const isDropdownExpanded = size.width <= largeBreakPoint

	return (
		<div className={`dropdown ${ isDropdownExpanded ? 'position-static' : '' }`}>
			<button className="navbar-item btn btn-link text-light font-weight-bold dropdown-toggle p-0 border-0" id="monthly-balance-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<BsPiggyBank size={props.sizeOfPrimaryIcons} title='Monthly Balance' />
			</button>
			<div className={`dropdown-menu ${ isDropdownExpanded ? 'w-100' : '' }`} aria-labelledby="monthly-balance-dropdown">
				<span className="dropdown-item-text text-muted">Monthly Balance</span>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item py-3" to='/register-monthly-balance'>
					<BsPiggyBank size={props.sizeOfSecondaryIcons} title='Register monthly balance' /><span className="ml-3">Register Monthly Balance</span>
				</Link>
				<Link className="dropdown-item py-3" to='/view-monthly-balance'>
					<BsGraphUp size={props.sizeOfSecondaryIcons} title='View monthly balances'/><span className="ml-3">View Monthly Balances</span>
				</Link>
				<Link className="dropdown-item py-3" to='/monthly-balance-administration'>
					<BsListUl size={props.sizeOfSecondaryIcons} title='Monthly balances administration'/><span className="ml-3">Monthly Balances List</span>
				</Link>
			</div>
		</div>
	)
}

MonthlyBalanceDropdown.propTypes = {
	sizeOfPrimaryIcons: PropTypes.string.isRequired,
	sizeOfSecondaryIcons: PropTypes.string.isRequired,
}