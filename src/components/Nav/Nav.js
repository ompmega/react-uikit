import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import NavItem from './NavItem'
import NavHeader from './NavHeader'
import NavDivider from './NavDivider'

const Nav = (props) => {
  const {
    className: customClassName,
    navbar,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-nav': !navbar,
    'uk-nav-default': !navbar,
    'uk-navbar-nav': navbar
  })

  return (
    <ul
      className={className}
      {...rest} />
  )
}

Nav.propTypes = {
  navbar: PropTypes.bool
}

Nav.defaultProps = {
  navbar: false
}

// Sub-components
Nav.Item = NavItem
Nav.Header = NavHeader
Nav.Divider = NavDivider

export default Nav
