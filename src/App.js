import React, { Component } from 'react'
import './App.css'
import firebase from 'firebase'

import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      user: {},
    }

    //listener for change in auth state
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const googleUser = {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        }
        this.setState({
          user: googleUser,
        })
      } else {
        this.setState({
          user: {}
        })
      }
    })
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch(function(error) {
      //Sign-out unsuccessful.
    });
  }

  isSignedIn = () => {
    return this.state.user.uid
  }

  render() {
    let element = this.isSignedIn() ? <Main signOut={this.signOut} user={this.state.user} /> : <SignIn />
      return (
        <div className="App">
          {element}
        </div>
      )
  }
}

export default App
