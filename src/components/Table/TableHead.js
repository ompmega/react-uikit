import React from 'react'

const TableHead = (props) => {
  const {
    children,
    ...rest
  } = props

  const childrenWithOriginProp = React.Children.map(children, child => {
    return React.cloneElement(child, { origin: 'TableHead' })
  })

  return (
    <thead
      children={childrenWithOriginProp}
      {...rest} />
  )
}

export default TableHead
