import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../AuthContext'

import { Jumbotron } from '../components/Jumbotron'
import { UserCard } from '../components/UserCard'

const Home = () => {
	const { userData } = useContext(AuthContext)
	const titleText = 'Welcome to didibudget!'
	const subtitleText = 'This is a website to manage your money.'
	const subtitleExtraLineText = 'You can register your saved and your expenses and view some graphics related about your personal economy.'

	return (
		<Fragment>
			<Jumbotron title={titleText} subtitle={subtitleText} subtitleExtraLine={subtitleExtraLineText} />
			{
				Object.keys(userData).length > 0 && <UserCard userData={userData} />
			}
		</Fragment>
	)
}

Home.displayName = 'Home'

export default Home
