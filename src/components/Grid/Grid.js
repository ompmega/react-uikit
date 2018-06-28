import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

class Grid extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    gutter: PropTypes.string,
    divider: PropTypes.bool,
    match: PropTypes.bool,
    item: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    gutter: 'small',
    divider: false,
    match: false,
    item: false
  }

  setRef = ref => this.node = ref

  componentWillUnmount() {
    const { item } = this.props

    if (!item)
      this.node.$destroy()
  }

  componentDidMount() {
    const { item } = this.props

    if (!item)
      UIkit.grid(this.node)
  }

  render() {
    const {
      className: customClassName,
      gutter,
      divider,
      match,
      item,
      ...rest
    } = this.props

    const className = item ? null : classNames(customClassName, 'uk-child-width-expand', {
      [`uk-grid-${gutter}`]: gutter,
      'uk-grid-divider': divider,
      'uk-grid-match': match
    })

    return React.createElement(
      'div',
      {
        ref: this.setRef,
        className,
        ...rest
      },
      this.props.children
    )
  }

}

export default Grid
