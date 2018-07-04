import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const {
    origin,
    children,
    ...rest
  } = props

  const childrenWithOriginProp = React.Children.map(children, child => {
    return React.cloneElement(child, { origin: origin })
  })

  return (
    <tr
      children={childrenWithOriginProp}
      {...rest} />
  )
}

TableRow.propTypes = {
  origin: PropTypes.string.isRequired
}

export default TableRow
