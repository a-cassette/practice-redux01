/*
 * state
 * {
 *   isShown: bool
 * }
 */


const toggleMessage (state = [], action) => {
    switch(action.type) {
        case 'SHOW_MESSAGE':
            return [
                isShown: true
            ]
        case 'HIDE_MESSAGE':
                isShown: false
        default:
            return state;
    }
}
