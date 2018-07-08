import React, { Component } from 'react'

class SignIn extends Component {
  handleGoogle = ()  => {
    this.props.googleSignIn()
  }

  render() {
    return (
      <button onClick={this.handleGoogle}>Sign In With Google</button>
    )
  }
}

export default SignIn
