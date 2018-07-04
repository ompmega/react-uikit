import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Progress = (props) => {
  const {
    className: customClassName,
    children,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-progress')

  return (
    <progress
      className={className}
      {...rest} />
  )
}

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number
}

Progress.defaultProps = {
  value: 0,
  max: 100
}

export default Progress
