import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const widthSizes = [
  '1-1',
  '1-2',
  '1-3', '2-3',
  '1-4', '3-4',
  '1-5', '4-5',
  '1-6', '5-6',
  'auto', 'expand'
]

const fixedSizes = [
  'small', 'medium', 'large', 'xlarge', 'xxlarge'
]

class Width extends React.Component {

  static propTypes = {
    xs: PropTypes.oneOf(widthSizes),
    sm: PropTypes.oneOf(widthSizes),
    md: PropTypes.oneOf(widthSizes),
    lg: PropTypes.oneOf(widthSizes),
    xl: PropTypes.oneOf(widthSizes),
    fixed: PropTypes.oneOf(fixedSizes),
  }

  static defaultProps = {
    component: 'div'
  }

  render() {
    const {
      className: customClassName,
      component,
      xs, sm, md, lg, xl,
      fixed,
      ...rest
    } = this.props

    const className = classNames(customClassName, {
      [`uk-width-${xs}`]: !!xs && !fixed,
      [`uk-width-${sm}@s`]: !!sm && !fixed,
      [`uk-width-${md}@m`]: !!md && !fixed,
      [`uk-width-${lg}@l`]: !!lg && !fixed,
      [`uk-width-${xl}@xl`]: !!xl && !fixed,
      [`uk-width-${fixed}`]: !!fixed
    }) || undefined

    return React.createElement(component, {
      className: className,
      ...rest
    })
  }
}

export default Width
