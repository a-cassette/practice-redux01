/*
 * compornents
 */

import React         from 'react'
import { Component } from 'react'
import ShowButton    from '../containers/showButton'
import HideButton    from '../containers/hideButton'
import Message       from '../containers/message'


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
