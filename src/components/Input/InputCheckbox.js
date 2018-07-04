import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputCheckbox = (props) => {
  const {
    className: customClassName,
    children,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-checkbox')

  return (
    <input
      className={className}
      type="checkbox"
      {...rest} />
  )
}

InputCheckbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool
}

export default InputCheckbox
