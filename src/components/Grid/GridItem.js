import React from 'react'

const GridItem = (props) => {
  const {
    component,
    ...rest
  } = props

  return React.createElement(component, {
    ...rest
  })
}

GridItem.defaultProps = {
  component: 'div'
}

export default GridItem
