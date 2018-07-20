import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Margin = (props) => {
  const {
    className: customClassName,
    component,
    dynamic,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-margin')

  return React.createElement(component, {
    className: className,
    ...dynamic ? { 'uk-margin' : '' } : undefined,
    ...rest
  })
}

Margin.propTypes = {
  dynamic: PropTypes.bool
}

Margin.defaultProps = {
  component: 'div',
  dynamic: false
}

export default Margin
