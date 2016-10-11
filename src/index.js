import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import showAndHide from './reducers'
import App from './app'

/*
 * instantiate store
 * createStore(container)
 */
const store = createStore(showAndHide)
const targetDom = document.getElementById('react_app')

/*
 * store has following methods
 *   dispatch(action)
 *   getState()
 *   replaceReducer(nextReducer)
 *   subscribe(listener)
 *   Symbol(observable)
 *   observable()
 */

render(
    <Provider store={store}>
        <App />
    </Provider>,
    targetDom
)


// import {showMessage, hideMessage }from './actions/index'

//console.dir(store)

//let unsubscribe = store.subscribe( () =>
//    console.log(store.getState())
//)


// store.dispatch(showMessage())
// store.dispatch(hideMessage())

//unsubscribe()
