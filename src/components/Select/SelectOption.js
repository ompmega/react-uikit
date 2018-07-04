import React from 'react'
import PropTypes from 'prop-types'

const SelectOption = (props) => {
  const {
    className,
    value,
    ...rest
  } = props

  return (
    <option
      value={value}
      {...rest} />
  )
}

SelectOption.propTypes = {
  children: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string
}

SelectOption.defaultProps = {
  value: ''
}

export default SelectOption
