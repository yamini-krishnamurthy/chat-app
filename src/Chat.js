import React, { Component } from 'react'
import base from './base'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
    }
  }

  //load messages when chat window is first rendered
  componentDidMount = () => {
    this.syncMessages()
  }

  //when the room changes, sync the messages with the new room 
  componentDidUpdate = (prevProps) =>{
    if(prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  //remove current room's message binding, and add sync the new room's message binding
  syncMessages = () => {
    if(this.messagesRef)
      base.removeBinding(this.messagesRef)
    this.messagesRef = base.syncState(`messages/${this.props.room.name}`, {
      context: this,
      state: 'messages',
      asArray: true,
    })
  }

  //add a message to state
  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user
    const msg = {id: `${user.uid}-${Date.now()}`, user, body, createdAt: Date.now()}

    messages.push(msg)

    this.setState({
      messages,
    })
  }

  render() {
    return (
      <div className="chat" style={styles.chat}>
        <ChatHeader removeRoom={this.props.removeRoom} room={this.props.room}/>
        <MessageList room={this.props.room} messages={this.state.messages}/>
        <MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

const styles = {
  chat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }

}

export default Chat
