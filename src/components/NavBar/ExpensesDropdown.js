import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { FaListUl, FaRegCreditCard } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { FaBalanceScaleLeft } from 'react-icons/fa'

import { useWindowSize } from '../../hooks/useWindowSize'

export const ExpensesDropdown = (props) => {
	const size = useWindowSize()
	const largeBreakPoint = 992
	const isDropdownExpanded = size.width <= largeBreakPoint

	return (
		<div className={`dropdown ${ isDropdownExpanded ? 'position-static' : '' }`}>
			<button className="navbar-item btn btn-link text-light font-weight-bold pt-2 dropdown-toggle" id="expenses-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<FaRegCreditCard size={props.sizeOfPrimaryIcons} title='Expenses' />
			</button>
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
					<FaListUl size={props.sizeOfSecondaryIcons} title='Expenses administration' /><span className="ml-3">Expenses List</span>
				</Link>
				<Link className="dropdown-item py-3" to='/expenses-analysis'>
					<FaBalanceScaleLeft size={props.sizeOfSecondaryIcons} title='Expenses analysis' /><span className="ml-3">Expenses Analysis</span>
				</Link>
			</div>
		</div>
	)
}

ExpensesDropdown.propTypes = {
	sizeOfPrimaryIcons: PropTypes.string.isRequired,
	sizeOfSecondaryIcons: PropTypes.string.isRequired,
}