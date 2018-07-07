import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

let customProps = {}

const Link = (props) => {
  const {
    className: customClassName,
    component,
    muted,
    voided,
    heading,
    reset,
    ...rest
  } = props

  const className = classNames(customClassName, {
    'uk-link-muted': muted,
    'uk-link-heading': heading,
    'uk-link-reset': reset
  }) || undefined

  switch (component) {
    case 'a':
      customProps = {
        ...customProps,
        href: voided ? 'javascript:;' : props.href || '#',
        role: voided ? 'button' : undefined
      }
      break
    case 'button':
      customProps = {
        ...customProps,
        type: props.type || 'button'
      }
    default:
      // Nothing
  }

  return React.createElement(component, {
    className: className,
    ...customProps,
    ...rest
  })
}

Link.propTypes = {
  muted: PropTypes.bool,
  voided: PropTypes.bool,
  heading: PropTypes.bool,
  reset: PropTypes.bool,
}

Link.defaultProps = {
  component: 'a',
  muted: false,
  voided: false,
  heading: false,
  reset: false,
}

export default Link
