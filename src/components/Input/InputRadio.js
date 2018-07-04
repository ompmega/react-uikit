import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputRadio = (props) => {
  const {
    className: customClassName,
    children,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-radio')

  return (
    <input
      className={className}
      type="radio"
      {...rest} />
  )
}

InputRadio.propTypes = {
  name: PropTypes.string.isRequired
}

export default InputRadio
