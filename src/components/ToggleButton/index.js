import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Toggle from 'react-toggle'
import './styles.css'

export const ToggleButton = ({ text, defaultState, onToggle }) => {

	const onChange = e => {
		onToggle(e.target.checked)
	}

	return (
		<Fragment>
			<label>
				<Toggle
					defaultChecked={defaultState}
					disabled={false}
					onChange={onChange}
				/>
				<span class="mx-2 text-white align-top">{text}</span>
			</label>
		</Fragment>
	)
}

ToggleButton.propTypes = {
	text: PropTypes.string.isRequired,
	defaultState: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired
}