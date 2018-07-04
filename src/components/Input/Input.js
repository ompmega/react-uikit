import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import InputLabel from './InputLabel'
import InputCheckbox from './InputCheckbox'
import InputRadio from './InputRadio'
import InputTextarea from './InputTextarea'

const Input = (props) => {
  const {
    className: customClassName,
    size,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-input', {
    [`uk-form-${size}`]: !!size
  })

  return (
    <input
      className={className}
      {...rest} />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'small', 'large'
  ])
}

Input.defaultProps = {
  disabled: false
}

// Sub-components
Input.Label = InputLabel
Input.Checkbox = InputCheckbox
Input.Radio = InputRadio
Input.Textarea = InputTextarea

export default Input
