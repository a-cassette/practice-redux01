/*
 * container
 */

import { connect } from 'react-redux'
import { showMessage, hideMessage } from '../actions'
import App from '../compornents/App'

const mapStateToProps = (state) => {
    return {
        isShown: state.isShown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(showMessage())
        }
    }
}

const VisibleMessage = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default VisibleMessage
