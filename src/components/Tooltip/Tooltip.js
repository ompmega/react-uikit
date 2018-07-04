import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import UIkit from 'uikit'

class Tooltip extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.object,
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'right']),
    duration: PropTypes.number,
    delay: PropTypes.number,
    animation: PropTypes.string,
  }

  static defaultProps = {
    options: {},
    position: 'top',
    duration: 100,
    animation: 'uk-animation-scale-up',
    /*onBeforeShow: f=>f,
    onShow: f=>f,
    onShown: f=>f,
    onBeforeHide: f=>f,
    onHide: f=>f,
    onHidden: f=>f,*/
  }

  /*_events = {
    'beforeshow': () => this.props.onBeforeShow(),
    'show': () => this.props.onShow(),
    'shown': () => this.props.onShown(),
    'beforehide': () => this.props.onBeforeHide(),
    'hide': () => this.props.onHide(),
    'hidden': () => this.props.onHidden(),
  }*/

  componentDidMount() {
    const {
      position: pos,
      duration,
      delay,
      animation
    } = this.props

    const options = {
      ...{ pos, duration, delay, animation },
      ...this.props.options,
    }

    this.component = UIkit.tooltip(ReactDOM.findDOMNode(this), options)
  }

  componentWillUnmount() {
    this.component.$destroy();
  }

  render() {
    const {
      title,
      children,
      position,
      options,
      duration,
      animation,
      ...rest
    } = this.props

    return React.cloneElement(children, {
      title: title,
      ...rest
    })
  }
}

export default Tooltip
