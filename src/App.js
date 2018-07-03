import React, { Component } from 'react'
import './App.css'

import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        uid: '',
        displayName: '',
      }
    }
  }

  signIn = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    let element = this.state.user.displayName == '' ? <SignIn signIn={this.signIn}/> : <Main user={this.state.user} />
    return (
      <div className="App">
        {element}
      </div>
    )
  }
}

export default App
