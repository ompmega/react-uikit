import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

import AlertClose from './AlertClose'

class Alert extends React.Component {

  static propTypes = {
    closable: PropTypes.bool,
    variant: PropTypes.oneOf([
      'primary', 'success', 'warning', 'danger'
    ]),
    close: PropTypes.bool,
  }

  static defaultProps = {
    component: 'div',
    closable: false,
    onBeforeHide: f=>f,
    onHide: f=>f,
    close: false,
  }

  _events = {
    'beforehide': () => this.props.onBeforeHide(),
    'hide': () => this.props.onHide(),
  }

  setRef = (ref) => this.node = ref

  componentDidMount() {
    this.component = UIkit.alert(this.node)

    // Bind UIkit events to this component
    Object.keys(this._events).map(eventName => {
      UIkit.util.on(this.node, eventName, this._events[eventName])
    })
  }

  componentWillUnmount() {
    this.component.$destroy()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.close)
      this.component.close()
  }

  render() {
    const {
      className: customClassName,
      component,
      closable,
      children,
      variant,
      close,
      ...rest
    } = this.props

    const className = classNames(customClassName, 'uk-alert', {
      [`uk-alert-${variant}`]: !!variant
    })

    // Appends close button if `closable` is set.
    let childrenNodes = []
    React.Children.forEach(children, child => {
      if (typeof child === 'object' && closable) {
        if (child.type.displayName !== 'AlertClose')
          childrenNodes.push(child)
      } else {
        childrenNodes.push(child)
      }
    })

    if (closable) {
      childrenNodes = [
        <AlertClose key={0} />,
        ...childrenNodes
      ]
    }

    return React.createElement(component, {
      ref: this.setRef,
      className: className,
      ...rest
    }, childrenNodes)
  }
}

// Sub-components
Alert.Close = AlertClose

export default Alert
