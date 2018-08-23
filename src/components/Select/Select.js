import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SelectOption from './SelectOption'

const Select = (props) => {
  const {
    className: customClassName,
    size,
    blank,
    ...rest
  } = props

  const className = classNames(
    customClassName,
    'uk-select',
    {
      [`uk-form-${size}`]: !!size,
      'uk-form-blank': blank

    }
  )

  return (
    <select
      className={className}
      {...rest} />
  )
}

Select.propTypes = {
  size: PropTypes.oneOf([
    'large', 'small'
  ]),
  blank: PropTypes.bool
}

Select.defaultProps = {
  blank: false
}

// Sub-components
Select.Option = SelectOption

export default Select
