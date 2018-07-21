import React, { Component } from 'react'

import Message from './Message'

class MessageList extends Component {
  //when a new message is entered, the list scrolls down to the bottom
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: 'smooth'})
  }

  //scroll to the bottom if the prev room's message array's length is less than the current room's message array's length
  componentDidUpdate = (prevProps) => {
    if(prevProps.messages.length < this.props.messages.length)
      this.scrollToBottom()
  }

  render() {
    return (
      <div className="MessageList" style={styles.messageList}>
        <div className="roomAnnouncement" style={styles.roomAnnouncement}>
          <h3 styles={styles.h3}>{this.props.room.name}</h3>
          <p>This is the very beginning of the #{this.props.room.name} room.</p>
        </div>
        {this.props.messages.map(msg => (
          <Message key={msg.id} message={msg} /> 
        ))}
        <div ref={el => this.messagesEnd = el}></div>
      </div>
    )
  }
}

const styles = {
  messageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },

  roomAnnouncement: {
    padding: '2rem 1rem 10rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList
