import React, { useContext } from 'react'
import { Link } from '@reach/router'

import { MdHome, MdPeopleOutline } from 'react-icons/md'
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

import { AuthContext } from '../../AuthContext'

import { MonthlyBalanceDropdown } from './MonthlyBalanceDropdown'
import { ExpensesDropdown } from './ExpensesDropdown'

const SIZE_OF_PRIMARY_ICONS = '36px'
const SIZE_OF_SECONDARY_ICONS = '24px'


export const NavBar = () => {
	const { isAuth } = useContext(AuthContext)
	const { userData } = useContext(AuthContext)

	return (
		<nav className="navbar navbar-expand-lg navbar-dark justify-content-between d-flex mb-5 border-bottom border-info">
			<Link className="navbar-item text-light font-weight-bold pt-2" to='/'>
				<MdHome size={SIZE_OF_PRIMARY_ICONS}/>
			</Link>

			{
				isAuth && <MonthlyBalanceDropdown sizeOfPrimaryIcons={SIZE_OF_PRIMARY_ICONS} sizeOfSecondaryIcons={SIZE_OF_SECONDARY_ICONS} />
			}

			{
				isAuth && <ExpensesDropdown sizeOfPrimaryIcons={SIZE_OF_PRIMARY_ICONS} sizeOfSecondaryIcons={SIZE_OF_SECONDARY_ICONS} />
			}

			{ 
				isAuth && userData.isAdmin && <Link className="navbar-item text-light font-weight-bold pt-2" to='/user-administration'>
					<MdPeopleOutline size={SIZE_OF_PRIMARY_ICONS}/>
				</Link>
			}
			<Link className="navbar-item text-light font-weight-bold pt-2" to='/logout'>
				{ !isAuth && <IoMdLogIn size={SIZE_OF_PRIMARY_ICONS}/> }
				{ isAuth && <IoMdLogOut size={SIZE_OF_PRIMARY_ICONS}/> }
			</Link>
		</nav>
	)
}