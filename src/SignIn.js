import React, { Component } from 'react'
import firebase from 'firebase'

import { auth, googleProvider } from './base'

import SignInWithPassword from './SignInWithPassword'

class SignIn extends Component {
  handleGoogle = ()  => {
    auth.signInWithPopup(googleProvider)
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
