/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'

class HideButton extends Component {
  // props validator
  static propTypes = {
      onHideButtonClick: PropTypes.func.isRequired
  }

  // methods

  // render
  render() {
    if (this.props.isShown) {
      return (
        <button onClick={ () => this.props.onHideButtonClick() } >
          hide
        </button>
      )
    } else {
      return false
    }
  }
}

export default HideButton
