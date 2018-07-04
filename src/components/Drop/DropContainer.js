import React from 'react'
import classNames from 'classnames'

const DropContainer = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-inline')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

DropContainer.defaultProps = {
  component: 'div'
}

export default DropContainer
