import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Divider = (props) => {
  const {
    className: customClassName,
    component,
    icon,
    small,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-divider-icon': icon,
    'uk-divider-small': small
  })

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

Divider.propTypes = {
  icon: PropTypes.bool,
  small: PropTypes.bool
}

Divider.defaultProps = {
  component: 'hr',
  icon: false,
  small: false
}

export default Divider
