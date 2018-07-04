import React from 'react'
import PropTypes from 'prop-types'

const TableCell = (props) => {
  const {
    origin,
    ...rest
  } = props

  if (origin === 'TableHead')
    return (
      <th {...rest} />
    )

  return (
    <td {...rest} />
  )
}

TableCell.propTypes = {
  origin: PropTypes.string.isRequired
}

export default TableCell
