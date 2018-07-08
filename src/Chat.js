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

  componentWillMount = () => {
    this.ref = base.syncState(`messages`, {
      context: this,
      state: `messages`,
      asArray: true,
    });
  }

  componentWillUnmount = () => {
    base.removeBinding(this.ref)
  }
 
  addMessage = (body) => {
    const messages = [...this.state.messages]
    console.log(this.props.user)
  
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
        <ChatHeader />
        <MessageList messages={this.state.messages} user={this.props.user}/>
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
