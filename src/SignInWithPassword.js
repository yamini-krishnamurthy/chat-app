import React, { Component } from 'react'
import firebase from 'firebase'

class SignInWithPassword extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: this.state.username,
      })
      this.props.setUserState(this.state.email, this.state.username, firebase.auth().currentUser.uid)
    }).catch((error) => {
      // Handle Errors here.
      alert(error.message)
      this.setState({
        email: '',
        password: '',
      })
    }) 
  }

  signIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      // Handle Errors here.
      alert(error.message)
      this.setState({
        email: '',
        password: '',
      })
    })
  }

  render() {
    return (
      <div className="SignInWithPassword">
        <input 
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          placeholder="Username"
        />
        <input 
          type="email" 
          name="email"
          value={this.state.email}
          onChange={this.handleEmailChange} 
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="Password"
        />
        <button onClick={this.signIn}>Sign in</button>
        <button onClick={this.signUp}>Sign up</button>
      </div>
    )
  }
}

export default SignInWithPassword
