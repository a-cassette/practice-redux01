/*
 * ref ( redux official > basics actions ):
 * Actions are payloads of information that send data from your application to your store.
 * They are the only source of information for the store. You send them to the store using store.dispatch().
 *
 * Actions are plain JavaScript objects.
 * Actions must have a type property that indicates the type of action being performed.
 */



/*
 * action types
 */
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'



/*
 * action creators
 */
export const showMessage = () => {
    return {
        type: 'SHOW_MESSAGE',
        text: 'Hello World'
    }
}

export const hideMessage = () => {
    return {
        type: 'HIDE_MESSAGE'
    }
}
