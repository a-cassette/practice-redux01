/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'
import { connect }   from 'react-redux'
import { hidePost }  from './actions'

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

//map state values into props
const mapStateToProps = (state) => {
  return state
}

//map dispatch result into props
const mapDispatchToProps = (dispatch) => {
  return {
    onHideButtonClick: () => { dispatch(hidePost()) },
  }
}

// instatiate component with maped properties
export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(HideButton)
