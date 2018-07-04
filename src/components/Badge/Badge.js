import React from 'react'
import classNames from 'classnames'

const Badge = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-badge')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

Badge.defaultProps = {
  component: 'span'
}

export default Badge
