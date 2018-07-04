import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardHeader = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-card-header')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

CardHeader.defaultProps = {
  component: 'div'
}

export default CardHeader
