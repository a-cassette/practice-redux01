/*
 * compornents
 */

import { connect }  from 'react-redux'
import { showPost } from '../actions/actions'
import ShowButton   from '../components/ShowButton'

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
