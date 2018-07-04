import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TableCaption from './TableCaption'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableRow from './TableRow'
import TableCell from './TableCell'

const Table = (props) => {
  const {
    className: customClassName,
    divider,
    striped,
    hover,
    size,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-table', {
    'uk-table-divider': divider,
    'uk-table-striped': striped,
    'uk-table-hover': hover,
    [`uk-table-${size}`]: size && size !== 'default'
  })

  return (
    <table
      className={className}
      {...rest} />
  )
}

Table.propTypes = {
  divider: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  size: PropTypes.oneOf([
    'small', 'default', 'large'
  ]),
}

Table.defaultProps = {
  divider: false,
  striped: false,
  hover: false,
  size: 'default'
}

// Sub-components
Table.Caption = TableCaption
Table.Head = TableHead
Table.Body = TableBody
Table.Footer = TableFooter
Table.Row = TableRow
Table.Cell = TableCell

export default Table
