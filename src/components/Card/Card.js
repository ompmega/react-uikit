import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CardTitle from './CardTitle'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

const Card = (props) => {
  const {
    className: customClassName,
    component,
    variant,
    body,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-card', {
    [`uk-card-${variant}`]: !!variant,
    'uk-card-body': body
  })

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

Card.propTypes = {
  variant: PropTypes.oneOf([
    'default', 'primary', 'secondary'
  ]),
  body: PropTypes.bool
}

Card.defaultProps = {
  component: 'div',
  variant: 'default',
  body: false
}


// Sub-components
Card.Title = CardTitle
Card.Body = CardBody
Card.Header = CardHeader
Card.Footer = CardFooter

export default Card
