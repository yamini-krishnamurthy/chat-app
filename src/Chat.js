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
      binding: null,
    }
  }

  componentWillMount = () => {
    this.changeMessages()
  }

  componentDidUpdate = (prevProps) =>{
    if(prevProps.room.name !== this.props.room.name) {
      this.changeMessages()
    }
  }

  changeMessages = () => {
    if(this.state.binding)
      base.removeBinding(this.state.binding)
    const binding = base.syncState(`messages/${this.props.room.name}`, {
      context: this,
      state: 'messages',
      asArray: true,
    })
    this.setState({ 
      binding,
    })
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user
    const msg = {id: `${user.uid}-${Date.now()}`, user, body}

    messages.push(msg)

    this.setState({
      messages,
    })
  }

  render() {
    return (
      <div className="chat" style={styles.chat}>
        <ChatHeader room={this.props.room}/>
        <MessageList room={this.props.room} messages={this.state.messages} user={this.props.user}/>
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
