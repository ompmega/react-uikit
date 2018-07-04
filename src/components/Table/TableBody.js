import React from 'react'

const TableBody = (props) => {
  const {
    children,
    ...rest
  } = props

  const childrenWithOriginProp = React.Children.map(children, child => {
    return React.cloneElement(child, { origin: 'TableBody' })
  })

  return (
    <tbody
      children={childrenWithOriginProp}
      {...rest} />
  )
}

export default TableBody
