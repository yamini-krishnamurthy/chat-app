import React, { Component } from 'react'

import Message from './Message'

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList" style={styles.messageList}>
        <div className="roomAnnouncement" style={styles.roomAnnouncement}>
          <h3 styles={styles.h3}>{this.props.room.name}</h3>
          <p>This is the very beginning of the #{this.props.room.name} room.</p>
        </div>
        {this.props.messages.map(msg => (
          <Message key={msg.id} user={this.props.user} message={msg} /> 
        ))}
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
    padding: '2rem 1rem',
  },

  h3: {
    fontSize: '1.5rem',
  },
}

export default MessageList
