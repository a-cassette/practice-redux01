/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'

class Message extends Component {
  // props validator
  static propTypes = {
    text: PropTypes.string
  }

  // methods

  // render
  render() {
    if (this.props.isShown) {
      return (
        <p>
          { this.props.text }
        </p>
      )
    } else {
      return false
    }
  }
}

export default Message
