import React from 'react'
import classNames from 'classnames'

const Placeholder = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-placeholder')

  return React.createElement(component, {
    className,
    ...rest
  })
}

Placeholder.defaultProps = {
  component: 'div'
}

export default Placeholder
