import PropTypes from 'prop-types'

export const PageSubTitle = ( { text, children } ) => <h5 className="mt-4 mb-3 ml-4 font-weight-light text-light">{text}{children}</h5>

PageSubTitle.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node,
}