import React from 'react'

const TableCaption = (props) => {
  const {
    ...rest
  } = props

  return (
    <caption
      {...rest} />
  )
}

export default TableCaption
