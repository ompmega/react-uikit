import React from 'react'
import PropTypes from 'prop-types'

const Progress = (props) => {
  const {
    className: customClassName,
    component,
    ratio,
    children,
    ...rest
  } = props

  return React.createElement(component, {
    'uk-spinner': '',
    ...rest
  })
}

Progress.propTypes = {
  ratio: PropTypes.number
}

Progress.defaultProps = {
  component: 'div'
}

export default Progress
