import React from 'react'
import classNames from 'classnames'

const ListItem = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName) || undefined

  return (
    <li
      className={className}
      {...rest} />
  )
}

export default ListItem
