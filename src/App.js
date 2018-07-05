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
        email: '',
      }
    }
  }

  signIn = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    let element = this.state.user.email == '' ? <SignIn signIn={this.signIn}/> : <Main user={this.state.user} />
    return (
      <div className="App">
        {element}
      </div>
    )
  }
}

export default App
