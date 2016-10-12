/*
 * containers
 */

import { connect }   from 'react-redux'
import { hidePost }  from '../actions/actions'
import HideButton    from '../components/HideButton'


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
