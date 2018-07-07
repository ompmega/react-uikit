import React from 'react'
import classNames from 'classnames'

const NavItem = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-nav-header')

  return (
    <li
      className={className}
      {...rest} />
  )
}

export default NavItem
