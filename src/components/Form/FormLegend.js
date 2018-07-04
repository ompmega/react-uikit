import React from 'react'
import classNames from 'classnames'

const FormLegend = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-legend')

  return (
    <legend
      className={className}
      {...rest} />
  )
}

export default FormLegend
