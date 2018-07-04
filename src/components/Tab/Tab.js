import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

import TabItem from './TabItem'

class Tab extends React.Component {

  static propTypes = {
    bottom: PropTypes.bool
  }

  static defaultProps = {
    component: 'ul',
    bottom: false
  }

  setRef = ref => this.node = ref

  componentDidMount() {
    this.component = UIkit.tab(this.node)
  }

  componentWillUnmount() {
    this.component.$destroy()
  }

  render() {
    const {
      className: customClassName,
      bottom,
      ...rest
    } = this.props

    const className = classNames(customClassName, {
      'uk-tab-bottom': bottom
    })

    return React.createElement(
      this.props.component,
      {
        ref: this.setRef,
        className,
        ...rest
      },
      this.props.children
    )
  }
}

// Sub-components
Tab.Item = TabItem

export default Tab
