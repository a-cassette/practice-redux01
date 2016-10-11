/*
 * compornents
 */

import React, { Component } from 'react'
//import React, { Component, PropTypes } from 'react'
// import VisibleMessage from '../containers/VisibleMessage'
// import React, { PropTypes } from 'react'

/* from Redux basic example tutorial
 * We write functional stateless components unless we need to use local state or the lifecycle methods.
 * This doesn't mean that presentational components have to be functions—it's just easier to define them this way.
 * If and when you need to add local state, lifecycle methods, or performance optimizations, you can convert them to classes.
 */
import ShowButton from './ShowButton'
import HideButton from './HideButton'
import Message from './Message'


class App extends Component {
  // props validator
  //static propTypes = {}

  // methods

  // render
  render() {
    return(
      <div>
        <ShowButton />
        <HideButton />
        <Message />
      </div>
    )
  }
}




export default App
