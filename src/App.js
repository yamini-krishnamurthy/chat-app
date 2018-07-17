import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends Component {
  constructor() {
    super()
    //we store the user information in local storage so that the chat window is loaded faster when the user is signed in
    const user = JSON.parse(localStorage.getItem('user'))

    //if the user is logged in, set the state to that user. if not, set it to an empty object
    this.state = {
      user: user || {},
    }

  }

  //listener for change in auth state
  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          //user is signed in
          this.handleAuth(user)
        } else {
          //user is signed out
          this.handleUnauth()
        }
      }
    )
  }

  //add to state and local storage
  handleAuth(oAuthUser) {
    const user = {
      uid: oAuthUser.uid,
      displayName: oAuthUser.displayName,
      email: oAuthUser.email,
      photoUrl: oAuthUser.photoURL,
    }
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  //remove from state and local storage
  handleUnauth() {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  //call the firebase signout function
  signOut = () => {
    auth.signOut()
  }

  //check for existence of state's user's id to check for sign in status
  signedIn = () => {
    return this.state.user.uid
  }

  //figure out how to comment in render method
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-up"
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <SignUp />
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <SignIn />
            )}
          />
          <Route
            path="/chat/rooms/:roomName"
            render={(navProps) => (
              this.signedIn()
                ? <Main
                    user={this.state.user}
                    signOut={this.signOut}
                    {...navProps}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            path="/chat"
            render={(navProps) => (
              this.signedIn()
                ? <Main
                    user={this.state.user}
                    signOut={this.signOut}
                    {...navProps}
                  />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/chat" />
                : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
