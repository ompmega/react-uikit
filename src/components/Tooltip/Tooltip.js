import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import UIkit from 'uikit'

const defaultOptions = {
  pos: 'top',
  duration: 100
}

class Tooltip extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    options: defaultOptions
  }

  componentDidMount() {
    const options = {
      defaultOptions,
      ...this.props.options
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
      ...rest
    } = this.props

    return React.cloneElement(children, {
      title: title,
      ...rest
    })
  }
}

export default Tooltip
