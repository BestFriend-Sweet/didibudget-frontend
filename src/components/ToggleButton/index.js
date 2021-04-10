import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Toggle from 'react-toggle'
import './styles.css'

export const ToggleButton = ({ text, defaultState, onToggle, isDisabled = false }) => {

	const onChange = e => {
		onToggle(e.target.checked)
	}

	return (
		<Fragment>
			<label>
				<Toggle
					defaultChecked={defaultState}
					disabled={isDisabled}
					onChange={onChange}
				/>
				<span className={`mx-2 text-white align-top ${isDisabled ? 'text-muted' : ''}`}>{text}</span>
			</label>
		</Fragment>
	)
}

ToggleButton.propTypes = {
	text: PropTypes.string.isRequired,
	defaultState: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool
}