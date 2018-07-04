import React from 'react'
import classNames from 'classnames'

const CardTitle = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-card-title')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

CardTitle.defaultProps = {
  component: 'h3'
}

export default CardTitle
