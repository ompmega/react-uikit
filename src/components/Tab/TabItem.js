import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TabItem = (props) => {
  const {
    className: customClassName,
    component,
    disabled,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-disabled': disabled
  })

  return (
    <li
      className={className}>
      {React.createElement(component, {
        ...rest
      })}
    </li>
  )
}

TabItem.propTypes = {
  disabled: PropTypes.bool
}

TabItem.defaultProps = {
  component: 'a',
  disabled: false
}

export default TabItem
