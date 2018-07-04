import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import FormFieldset from './FormFieldset'
import FormLegend from './FormLegend'
import FormControls from './FormControls'

const Form = (props) => {
  const {
    className: customClassName,
    stacked,
    horizontal,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-form-stacked': stacked,
    'uk-form-horizontal': horizontal
  })

  return (
    <form
      className={className}
      {...rest} />
  )
}

Form.propTypes = {
  onSubmit: PropTypes.any,
  method: PropTypes.oneOf([
    'get', 'post'
  ]),
  action: PropTypes.string,
  stacked: PropTypes.bool,
  horizontal: PropTypes.bool
}

Form.defaultProps = {
  stacked: false,
  horizontal: false
}

// Sub-components
Form.Fieldset = FormFieldset
Form.Legend = FormLegend
Form.Controls = FormControls

export default Form
