/*import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'
import _ from 'lodash'
import classNames from 'classnames'

class Modal extends React.Component {

  state = {
    isOpen: false
  }

  static propTypes = {
    open: PropTypes.bool
  }

  static defaultProps = {
    open: false
  }

  setRef = ref => this.node = ref

  handleClose = () => {
    setTimeout(() => {
      this.props.open = false
    }, 300)
  }

  render() {
    const { open } = this.props

    const className = classNames('uk-modal', {
      'uk-open': open
    })

    const style = {
      display: 'block'
    }

    return (
      <Portal
        closeOnEsc
        closeOnOutsideClick
        ref={this.setRef}>
        <div
          className={className}
          style={style}
          aria-hidden={!open}>
        </div>
      </Portal>
    )
  }
}

export default Modal
*/
"use strict";