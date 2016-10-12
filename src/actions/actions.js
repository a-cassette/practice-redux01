/*
 * action creator
 */


/*
 * memo according to redux official:
 * Actions are payloads of information that send data from your application to your store.
 * They are the only source of information for the store. You send them to the store using store.dispatch().
 *
 * Actions are plain JavaScript objects.
 * Actions must have a type property that indicates the type of action being performed.
 */


/*
 * action types
 */
export const SHOW_POST = 'SHOW_POST'
export const HIDE_POST = 'HIDE_POST'

/*
 * action creators
 */
export const showPost = () => {
  console.log('showPost called')
  return {
    type: SHOW_POST,
    text: 'Hola el mundo'
  }
}

export const hidePost = () => {
  console.log('hidePost called')
  return {
    type: HIDE_POST,
  }
}
