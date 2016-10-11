/*
 * The reducer is a pure function that takes the previous state and an action, and returns the next state.
 * (previousState, action) => newState
 *
 */

/*
 * state shapes
 * {
 *   isShown: bool
 * }
 */

import { SHOW_POST, HIDE_POST } from './actions'


const initialState = {
  isShown: false,
  text: null
}


const showAndHide = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_POST:
      return Object.assign({}, state, {
        isShown: true,
        text: action.text
      })
    case HIDE_POST:
      return Object.assign({}, state, {
        isShown: false,
        text: null
      })
    default:
      return state;
  }
}

export default showAndHide
