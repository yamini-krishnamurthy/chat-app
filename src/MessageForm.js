import React, { Component } from 'react'

class MessageForm extends Component {
  state = {
      body: '',
  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMessage(this.state.body)
    this.setState({
      body: '',
    })
  }

  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleSubmit}>
        <input 
          name="body"
          type="text"
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
          autoFocus
          required
        />

        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default MessageForm
