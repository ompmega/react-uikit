import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = (props) => {
  const {
    className: customClassName,
    variant,
    small,
    large,
    href,
    type,
    block,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-button', {
    [`uk-button-${variant}`]: variant,
    'uk-button-small': small,
    'uk-button-large': large,
    'uk-width-1-1': block,
  })

  return href ? (
    <a
      href={href}
      className={className}
      {...rest} />
  ) : (
    <button
      type={type || 'button'}
      className={className}
      {...rest} />
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'danger', 'text', 'link'
  ]),
  small: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool
}

Button.defaultProps = {
  variant: 'default',
  small: false,
  large: false,
  block: false
}

export default Button
