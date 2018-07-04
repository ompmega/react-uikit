import React from 'react'
import classNames from 'classnames'

const FormControls = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-form-controls')

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

FormControls.defaultProps = {
  component: 'div'
}

export default FormControls
