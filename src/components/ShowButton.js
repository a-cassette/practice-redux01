/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'

class ShowButton extends Component {
  // props validator
  static propTypes = {
    onShowButtonClick: PropTypes.func.isRequired
  }

  // methods

  // render
  render() {
    if (!this.props.isShown) {
      return (
        <button onClick={ () => this.props.onShowButtonClick() } >
          show
        </button>
      )
    } else {
      return false
    }
  }
}

export default ShowButton
