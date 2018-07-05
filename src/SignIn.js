import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      uid: 'hGHjnb789',
      email: this.state.email,
    }
    this.props.signIn(user)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your email..."
          autoFocus
          required
          value={this.state.email}
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
