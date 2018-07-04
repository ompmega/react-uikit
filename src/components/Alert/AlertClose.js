import React from 'react'
import classNames from 'classnames'

const AlertClose = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-alert-close')

  return React.createElement(component, {
    className: className,
    'data-uk-close': '',
    ...rest
  })
}

AlertClose.defaultProps = {
  component: 'a'
}

export default AlertClose
