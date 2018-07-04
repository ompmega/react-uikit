import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Label = (props) => {
  const {
    className: customClassName,
    component,
    variant,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-label', {
    [`uk-label-${variant}`]: !!variant
  })

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

Label.propTypes = {
  variant: PropTypes.oneOf([
    'primary', 'success', 'warning', 'danger'
  ])
}

Label.defaultProps = {
  component: 'span'
}

export default Label
