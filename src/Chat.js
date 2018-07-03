import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {id: 1, userName: 'yamini', body: '\'sup'},
        {id: 2, userName: 'charlene', body: 'nothin\' much'}
      ],
    }
  }
 
  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <MessageList messages={this.state.messages}/>
        <MessageForm />
      </div>
    )
  }
}

export default Chat
