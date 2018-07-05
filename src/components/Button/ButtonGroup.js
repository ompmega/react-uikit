import React from 'react'
import classNames from 'classnames'

const ButtonGroup = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-button-group')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

ButtonGroup.defaultProps = {
  component: 'div'
}

export default ButtonGroup
