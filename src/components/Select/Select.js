import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SelectOption from './SelectOption'

const Select = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-select')

  return (
    <select
      className={className}
      {...rest} />
  )
}

Select.propTypes = {
  placeholder: PropTypes.string
}

// Sub-components
Select.Option = SelectOption

export default Select
