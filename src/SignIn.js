import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      uid: Date.now(),
      displayName: this.state.username,
    }
    this.props.signIn(user)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your username..."
          autoFocus
          required
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default SignIn
