import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

import DropContainer from './DropContainer'

class Drop extends React.PureComponent {

  static propTypes = {
    mode: PropTypes.oneOf([
      'click', 'hover'
    ]),
    position: PropTypes.oneOf([
      'bottom-left', 'bottom-center', 'bottom-right', 'bottom-justify',
      'top-left', 'top-center', 'top-right', 'top-justify',
      'left-top', 'left-center', 'left-bottom',
      'right-top', 'right-center', 'right-bottom'
    ]),
    offset: PropTypes.number,
    delayHide: PropTypes.number,
    duration: PropTypes.number,
  }

  static defaultProps = {
    component: 'div',
    mode: 'hover',
    position: 'bottom-left',
    offset: 0,
    delayHide: 800,
    duration: 200,
    onBeforeShow: f=>f,
    onShow: f=>f,
    onShown: f=>f,
    onBeforeHide: f=>f,
    onHide: f=>f,
    onHidden: f=>f,
    onToggle: f=>f,
    onStack: f=>f,
  }

  _events = {
    'toggle': () => this.props.onToggle(),
    'stack': () => this.props.onStack(),
    'beforeshow': () => this.props.onBeforeShow(),
    'show': () => this.props.onShow(),
    'shown': () => this.props.onShown(),
    'beforehide': () => this.props.onBeforeHide(),
    'hide': () => this.props.onHide(),
    'hidden': () => this.props.onHidden(),
  }

  setRef = (ref) => this.node = ref

  getOptions = () => {
    const {
      mode,
      position,
      offset,
      delayHide,
      duration
    } = this.props

    return {
      mode: mode,
      pos: position,
      offset: offset,
      'delay-hide': delayHide,
      duration: duration
    }
  }

  registerComponent = () => {
    this.component = UIkit.drop(this.node, this.getOptions())
  }

  componentDidMount() {
    this.registerComponent()

    // Bind UIkit events to this component
    Object.keys(this._events).map(eventName => {
      UIkit.util.on(this.node, eventName, this._events[eventName])
    })
  }

  componentWillUnmount() {
    this.component.$destroy()
  }

  render() {
    const {
      className: customClassName,
      component,
      mode,
      position,
      duration,
      delayHide,
      offset,
      ...rest
    } = this.props

    return React.createElement(component, {
      ref: this.setRef,
      className: customClassName,
      ...rest
    })
  }
}

// Sub-components
Drop.Container = DropContainer

export default Drop
