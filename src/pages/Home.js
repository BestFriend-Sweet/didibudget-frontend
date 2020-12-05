import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../AuthContext'

import { Jumbotron } from '../components/Jumbotron'
import { UserCard } from '../components/UserCard'

const Home = () => {
	const { userData } = useContext(AuthContext)

	return (
		<Fragment>
			<Jumbotron title='didibudget' subtitle='Welcome! This is an app to manage your money' />
			{
				Object.keys(userData).length > 0 && <UserCard userData={userData} />
			}
		</Fragment>
	)
}

Home.displayName = 'Home'

export default Home
