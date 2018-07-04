import React from 'react'
import classNames from 'classnames'

const CardBody = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-card-body')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

CardBody.defaultProps = {
  component: 'div'
}

export default CardBody
