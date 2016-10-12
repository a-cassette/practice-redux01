/*
 * entry point
 */

import React           from 'react'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import { createStore } from 'redux'

import showAndHide     from './reducers/reducers'
import App             from './components/app'

/*
 * instantiate store
 * createStore(container)
 */
const store = createStore(showAndHide)
const targetDom = document.getElementById('react_app')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    targetDom
)

