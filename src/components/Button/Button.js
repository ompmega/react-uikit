import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ButtonGroup from './ButtonGroup'

const Button = (props) => {
  const {
    className: customClassName,
    component,
    variant,
    small,
    large,
    href,
    type,
    block,
    size,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-button', {
    [`uk-button-${variant}`]: variant,
    'uk-button-small': small || size === 'small',
    'uk-button-large': large || size === 'large',
    'uk-width-1-1': block,
  })

  if (!!href) return (
    <a
      href={href}
      className={className}
      {...rest} />
  )

  if (component === 'button') return (
    <button
      type={type}
      className={className}
      {...rest} />
  )

  return React.createElement(component, {
    className: className,
    type: type,
    ...rest
  })
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'danger', 'text', 'link'
  ]),
  size: PropTypes.oneOf([
    'small', 'large'
  ]),
  small: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool
}

Button.defaultProps = {
  component: 'button',
  type: 'button',
  variant: 'default',
  small: false,
  large: false,
  block: false
}

// Sub-components
Button.Group = ButtonGroup

export default Button
