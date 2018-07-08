import React, { Component } from 'react'
import firebase from 'firebase'

class SignIn extends Component {
  handleGoogle = ()  => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  render() {
    return (
      <button onClick={this.handleGoogle}>Sign In With Google</button>
    )
  }
}

export default SignIn
