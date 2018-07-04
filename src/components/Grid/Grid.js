import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

import GridItem from './GridItem'

class Grid extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    gutter: PropTypes.string,
    divider: PropTypes.bool,
    match: PropTypes.bool
  }

  static defaultProps = {
    component: 'div',
    className: '',
    gutter: 'small',
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
      ...rest
    } = this.props

    const className = classNames(customClassName, 'uk-child-width-expand', {
      [`uk-grid-${gutter}`]: gutter,
      'uk-grid-divider': divider,
      'uk-grid-match': match
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
