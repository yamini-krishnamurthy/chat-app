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
  }

  googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      // The signed-in user info.
      const googleUser = result.user
      const user = {
        displayName: googleUser.displayName,
        email: googleUser.email,
        uid: googleUser.uid,
      }
      this.setState({
        user,
      })
    }).catch(function(error) {
    })
  }


  signOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch(function(error) {
      console.log('fail')
    });
    this.setState({
      user: {}
    })
  }

  isSignedIn = () => {
    return this.state.user.uid
  }

  render() {
    let element = this.isSignedIn() ? <Main signOut={this.signOut} user={this.state.user} /> : <SignIn googleSignIn={this.googleSignIn}/>
      return (
        <div className="App">
          {element}
        </div>
      )
  }
}

export default App
