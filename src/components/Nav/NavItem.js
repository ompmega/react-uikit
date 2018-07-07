import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavItem = (props) => {
  const {
    className: customClassName,
    active,
    ...rest
  } = props

  const className = classNames({
    'uk-active': active
  }) || undefined

  return (
    <li
      className={className}
      {...rest} />
  )
}

NavItem.propTypes = {
  active: PropTypes.bool
}

NavItem.defaultProps = {
  active: false
}

export default NavItem
