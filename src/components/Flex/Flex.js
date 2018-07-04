import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Flex = (props) => {
  const {
    component,
    className: customClassName,
    inline,
    align,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-flex': !inline,
    'uk-flex-inline': inline,
    [`uk-flex-${align}`]: !!align
  })

  return React.createElement(component, {
    className,
    ...rest
  })
}

Flex.propTypes = {
  inline: PropTypes.bool,
  align: PropTypes.oneOf([
    'left', 'center', 'right', 'between', 'around',
    'stretch', 'top', 'middle', 'bottom'
  ])
}

Flex.defaultProps = {
  component: 'div',
  inline: false
}

export default Flex
