/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'
import { connect }   from 'react-redux'
import { showPost }  from './actions'

/* from Redux basic example tutorial
 * We write functional stateless components unless we need to use local state or the lifecycle methods.
 * This doesn't mean that presentational components have to be functions—it's just easier to define them this way.
 * If and when you need to add local state, lifecycle methods, or performance optimizations, you can convert them to classes.
 */

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

//map state values into props
const mapStateToProps = (state) => {
  return state
}

//map dispatch result into props
const mapDispatchToProps = (dispatch) => {
  return {
    onShowButtonClick: () => { dispatch(showPost()) },
  }
}

// instatiate component with maped properties
export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowButton)
