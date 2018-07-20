import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

import GridItem from './GridItem'

const widthSizes = [
  '1-1',
  '1-2',
  '1-3', '2-3',
  '1-4', '3-4',
  '1-5', '4-5',
  '1-6', '5-6',
  'auto', 'expand'
]

class Grid extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    gutter: PropTypes.string,
    divider: PropTypes.bool,
    match: PropTypes.bool,
    xs: PropTypes.oneOf(widthSizes),
    sm: PropTypes.oneOf(widthSizes),
    md: PropTypes.oneOf(widthSizes),
    lg: PropTypes.oneOf(widthSizes),
    xl: PropTypes.oneOf(widthSizes),
  }

  static defaultProps = {
    component: 'div',
    className: '',
    gutter: 'medium',
    divider: false,
    match: false
  }

  setRef = ref => this.node = ref

  componentDidMount() {
    this.component = UIkit.grid(this.node)
  }

  render() {
    const {
      className: customClassName,
      component,
      gutter,
      divider,
      match,
      xs, sm, md, lg, xl,
      ...rest
    } = this.props

    const className = classNames(customClassName, {
      [`uk-grid-${gutter}`]: gutter,
      'uk-grid-divider': divider,
      'uk-grid-match': match,
      /* Child widths */
      [`uk-child-width-${xs}`]: !!xs,
      [`uk-child-width-${sm}@s`]: !!sm,
      [`uk-child-width-${md}@m`]: !!md,
      [`uk-child-width-${lg}@l`]: !!lg,
      [`uk-child-width-${xl}@xl`]: !!xl,
    })

    return React.createElement(component, {
      ref: this.setRef,
      className: className,
      ...rest
    })
  }
}

Grid.Item = GridItem

export default Grid
