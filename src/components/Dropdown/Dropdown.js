import React from 'react'
import UIkit from 'uikit'

import Drop from '../Drop/Drop'

class Dropdown extends Drop {
  registerComponent = () => {
    this.component = UIkit.dropdown(this.node, this.getOptions())
  }
}

// Sub-component
Dropdown.Container = Drop.Container

export default Dropdown
