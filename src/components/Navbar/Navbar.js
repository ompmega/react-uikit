import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import UIkit from 'uikit'

class Navbar extends React.Component {
  static defaultProps = {
    component: 'nav'
  }

  setRef = ref => this.node = ref

  componentDidMount() {
    this.component = UIkit.navbar(this.node)
  }

  componentWillUnmount() {
    this.component.$destroy()
  }

  render() {
    const {
      className: customClassName,
      component,
      ...rest
    } = this.props

    const className = classNames(customClassName, 'uk-navbar-container')

    return React.createElement(component, {
      ref: this.setRef,
      className: className,
      ...rest
    })
  }
}

const NavbarBlock = (props) => {
  const {
    className: customClassName,
    component,
    align,
    ...rest
  } = props

  const className = classNames(customClassName, {
    [`uk-navbar-${align}`]: !!align
  })

  return React.createElement(component, {
    className: className,
    ...rest
  })
}
NavbarBlock.propTypes = {
  align: PropTypes.oneOf([
    'left', 'center', 'right'
  ])
}
NavbarBlock.defaultProps = {
  component: 'div',
  align: 'left'
}

Navbar.Block = NavbarBlock

export default Navbar
