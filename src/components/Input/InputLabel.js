import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputLabel = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const isElement = React.isValidElement(props.children[0])

  const className = classNames(customClassName, {
    'uk-form-label': !isElement
  })

  return React.createElement(component, {
    className: className,
    ...rest
  })
}

InputLabel.propTypes = {
  htmlFor: PropTypes.string
}

InputLabel.defaultProps = {
  component: 'label'
}

export default InputLabel
