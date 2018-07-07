import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ListItem from './ListItem'

const List = (props) => {
  const {
    className: customClassName,
    bullet,
    divider,
    striped,
    large,
    ...rest
  } = props

  const className = classNames(customClassName, 'uk-list', {
    'uk-list-bullet': bullet,
    'uk-list-divider': divider,
    'uk-list-striped': striped,
    'uk-list-large': large
  })

  return (
    <ul
      className={className}
      {...rest} />
  )
}

List.propTypes = {
  bullet: PropTypes.bool,
  divider: PropTypes.bool,
  striped: PropTypes.bool,
  large: PropTypes.bool,
}

List.defaultProps = {
  bullet: false,
  divider: false,
  striped: false,
  large: false,
}

// Sub-components
List.Item = ListItem

export default List
