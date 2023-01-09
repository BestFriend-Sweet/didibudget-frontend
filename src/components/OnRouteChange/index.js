import { useEffect, useRef, Fragment } from 'react'
import PropTypes from 'prop-types'

export const OnRouteChangeWorker = ({
	location,
	action
}) => {
	const locationRef = useRef('')
	useEffect(() => {
		if (location.pathname !== locationRef.current) {
			locationRef.current = location.pathname
			action()
		}
	})

	return null
}

const defaultAction = () => {
	window.scrollTo(0, 0)
}

export const OnRouteChange = ({
	action = defaultAction
}) => {
	return (
		<Fragment>
			{({ location }) => (
				<OnRouteChangeWorker location={location} action={action} />
			)}
		</Fragment>
	)
}

OnRouteChange.propTypes = {
	action: PropTypes.func
}