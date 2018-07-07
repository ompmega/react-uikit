import React from 'react'
import classNames from 'classnames'

import BreadcrumbItem from './BreadcrumbItem'

const Breadcrumb = (props) => {
  const {
    className: customClassName,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-breadcrumb')

  return (
    <ul
      className={className}
      {...rest} />
  )
}

// Sub-components
Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
