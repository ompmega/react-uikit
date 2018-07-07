import React from 'react'
import classNames from 'classnames'

import NavItem from './NavItem'
import NavHeader from './NavHeader'
import NavDivider from './NavDivider'

const Nav = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-nav', 'uk-nav-default')

  return (
    <ul
      className={className}
      {...rest} />
  )
}

// Sub-components
Nav.Item = NavItem
Nav.Header = NavHeader
Nav.Divider = NavDivider

export default Nav
