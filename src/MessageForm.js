import React, { Component } from 'react'

class MessageForm extends Component {
  render() {
    return (
      <form className="MessageForm">
        <input 
          name="body"
          type="text"
          placeholder="Type a message..."
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
