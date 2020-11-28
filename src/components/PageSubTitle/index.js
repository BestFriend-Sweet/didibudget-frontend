import React from 'react'
import PropTypes from 'prop-types'

export const PageSubTitle = ( { text } ) => <h5 className="mt-4 mb-3 ml-4 font-weight-light text-light">{text}</h5>

PageSubTitle.propTypes = {
	text: PropTypes.string.isRequired
}