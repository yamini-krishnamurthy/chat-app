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
 
  addMessage = (body) => {
    const messages = [...this.state.messages]
    const userName = 'kendall'
    messages.push({id: `${userName}-${Date.now()}`, userName, body})
    this.setState({
      messages,
    })
  }

  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <MessageList messages={this.state.messages}/>
        <MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default Chat
