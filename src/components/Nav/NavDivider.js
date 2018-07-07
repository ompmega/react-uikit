import React from 'react'
import classNames from 'classnames'

const NavDivider = (props) => {
  const {
    className: customClassName,
    children,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-nav-divider')

  return (
    <li
      className={className}
      {...rest} />
  )
}

export default NavDivider
