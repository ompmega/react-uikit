import React from 'react'

const TableFooter = (props) => {
  const {
    children,
    ...rest
  } = props

  const childrenWithOriginProp = React.Children.map(children, child => {
    return React.cloneElement(child, { origin: 'TableFooter' })
  })

  return (
    <tfoot
      children={childrenWithOriginProp}
      {...rest} />
  )
}

export default TableFooter
