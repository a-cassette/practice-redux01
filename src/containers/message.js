/*
 * containers
 */

import { connect } from 'react-redux'
import Message     from '../components/Message'


//map state values into props
const mapStateToProps = (state) => {
  return state
}

// instatiate component with maped properties
export default connect(
    mapStateToProps,
)(Message)
