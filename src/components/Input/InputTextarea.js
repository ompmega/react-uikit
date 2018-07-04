import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputTextarea = (props) => {
  const {
    className: customClassName,
    rows,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-textarea')

  return (
    <textarea
      className={className}
      rows={rows}
      {...rest} />
  )
}

InputTextarea.propTypes = {
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any
}

InputTextarea.defaultProps = {
  rows: 4
}

export default InputTextarea
