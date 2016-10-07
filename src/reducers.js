/*
 * state
 * {
 *   isShown: bool
 * }
 */

const defaultState = {
    'isShown': false
}


export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SHOW_MESSAGE':
            return {
                isShown: true
            }
        case 'HIDE_MESSAGE':
            return {
                isShown: false
            }
        default:
            return state;
    }
}
