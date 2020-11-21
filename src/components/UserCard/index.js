import React from 'react'
import PropTypes from 'prop-types'

export const UserCard = ( { userData } ) => (
	<section className="mt-4">
		<div className="card">
			<div className="card-header">
				<h4 className="mb-0">
					Your user data
				</h4>
			</div>
			<div className="card-body pb-0">
				<p>You are logged as: <span className="font-weight-light pl-3">{userData.email}</span></p>
				{
					userData.isAdmin && <p>You are an administrator user!</p>
				}
			</div>
		</div>
	</section>
)

UserCard.propTypes = {
	userData: PropTypes.shape({
		email: PropTypes.string.isRequired,
		isAdmin: PropTypes.bool.isRequired,
	})
}