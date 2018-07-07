import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BreadcrumbItem = (props) => {
  const {
    className: customClassName,
    disabled,
    active,
    children,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-disabled': disabled
  }) || undefined

  return (
    <li
      className={className}
      {...rest}>
      {active ? (
        <span>{children}</span>
      ) : children}
    </li>
  )
}

BreadcrumbItem.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool
}

BreadcrumbItem.defaultProps = {
  disabled: false,
  active: false
}

export default BreadcrumbItem
