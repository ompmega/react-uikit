import React from 'react'
import classNames from 'classnames'

const FormFieldset = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-fieldset')

  return (
    <fieldset
      className={className}
      {...rest} />
  )
}

export default FormFieldset
