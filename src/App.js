/*
 * compornents
 */

import React, { Component } from 'react'
//import React, { Component, PropTypes } from 'react'
//import VisibleMessage from '../containers/VisibleMessage'
// import React, { PropTypes } from 'react'

/* from Redux basic example tutorial
 * We write functional stateless components unless we need to use local state or the lifecycle methods.
 * This doesn't mean that presentational components have to be functions—it's just easier to define them this way.
 * If and when you need to add local state, lifecycle methods, or performance optimizations, you can convert them to classes.
 */

class Button extends Component {
    // props validator
    //static propTypes = {
    //    onClick: PropsTypes.func.isRequired
    //}

    // methods
    getColor = () => this.props.isShown ? 'blue' : 'red'
    getText  = () => this.props.isShown ? 'Hide Message' : 'Show Message'

    // render
    render() {
        const { onClick } = this.props
        return (
            <p onClick={onClick} style={this.getColor} >
                { this.getText }
            </p>
        )
    }
}


class Message extends Component {
    // props validator
    //static propTypes = {}

    // methods
    getMessage = () => this.props.isShown ? 'Hello World' : ''

    // render
    render() {
        return (
            <p>
                { this.getMessage }
            </p>
        )
    }
}

class App extends Component {
    // props validator
    //static propTypes = {}

    // methods

    // render
    render() {
        return(
            <div>
                <Button />
                <Message />
            </div>
        )
    }
}




/*
const ShowButton = ({ onClick, isShown }) => (
    <p onClick={onClick} style={{ color: isShown ? 'blue' : 'red' }} >
        { isShown ? 'Hide Message' : 'Show Message' }
    </p>
)

const Message = (isShown) => (
    <p>
        { isShown ? 'hello world' : '' }
    </p>
)

const App = () => (
    <div>
        <ShowButton />
        <Message />
    </div>
)
*/


export default App
