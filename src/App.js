import React, { Component } from 'react'
import './App.css'

import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user || {},
    }
  }

  signIn = (user) => {
    this.setState({
      user
    })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem('user')
  }

  isSignedIn = () => {
    console.log(this.state.user.uid)
    return this.state.user.uid
  }

  render() {
    let element = this.isSignedIn() ? <Main signOut={this.signOut} user={this.state.user} /> : <SignIn signIn={this.signIn}/>
    return (
      <div className="App">
        {element}
      </div>
    )
  }
}

export default App
