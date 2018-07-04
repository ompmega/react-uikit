import React from 'react'
import classNames from 'classnames'

const Container = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-container')

  return React.createElement(component, {
    className,
    ...rest
  })
}

Container.defaultProps = {
  component: 'div'
}

export default Container
