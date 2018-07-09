import React, { Component } from 'react'
import firebase from 'firebase'

import SignInWithPassword from './SignInWithPassword'

class SignIn extends Component {
  handleGoogle = ()  => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  render() {
    return (
      <div className="SignIn">
        <button onClick={this.handleGoogle}>Sign In With Google</button>
        <SignInWithPassword setUserState={this.props.setUserState}/>
      </div>  
    )
  }
}

export default SignIn
