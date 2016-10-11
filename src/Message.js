/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'
import { connect }   from 'react-redux'

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

//export default Message

//map state values into props
const mapStateToProps = (state) => {
  return state
}

// instatiate component with maped properties
export default connect(
    mapStateToProps,
)(Message)
