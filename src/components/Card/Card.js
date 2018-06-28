import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Card = (props) => {
  const {
    className: customClassName,
    title,
    variant,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-card': !title,
    'uk-card-body': !title,
    'uk-card-title': title,
    [`uk-card-${variant}`]: !!variant
  })

  if (title) return (
    <h3
      className={className}
      {...rest} />
  )

  return (
    <div
      className={className}
      {...rest} />
  )
}

Card.propTypes = {
  title: PropTypes.bool,
  variant: PropTypes.oneOf(['default']),
}

export default Card
