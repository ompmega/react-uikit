import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = (props) => {
  const {
    className: customClassName,
    component,
    ...rest
  } = props

  const className = classNames(
    customClassName,
    'uk-container'
  )

  return React.createElement(
    component,
    { className, ...rest }
  )
}

Container.propTypes = {
  className: PropTypes.string,
  component: PropTypes.element
}

Container.defaultProps = {
  component: 'div'
}

export default Container
