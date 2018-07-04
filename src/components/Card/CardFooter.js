import React from 'react'
import classNames from 'classnames'

const CardFooter = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-card-footer')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

CardFooter.defaultProps = {
  component: 'div'
}

export default CardFooter
