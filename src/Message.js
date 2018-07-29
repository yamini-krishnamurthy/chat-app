import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Avatar from './Avatar'
import Metadata from './Metadata'
import Reaction from './Reaction'

class Message extends Component {
  state = {
    showPicker: false,
  }

  togglePicker = () => {
    this.setState({
      showPicker: !this.state.showPicker,
    })
  }

  handleEmojiClick = (emoji) => {
    this.props.addOrRemoveReaction(this.props.message, emoji.colons)
    this.togglePicker()
  }

  render() {
    const { message } = this.props
    return (
      <div className={`Message ${css(styles.message)}`}>
        <Avatar user={message.user} />
        <div className={css(styles.details)}>
          <Metadata message={message} />
          <div className="body">
            {message.body}
          </div>
          <div className={css(styles.reactions)}>
            { message.reactions && Object.keys(message.reactions).map(emoji => (
              <Reaction key={emoji} emoji={emoji} message={message} addOrRemoveReaction={this.props.addOrRemoveReaction} hasReacted={this.props.hasReacted} />
            )
            )}
          </div>
          <button className={`reactionButton ${css(styles.reactionButton)}`} onClick={this.togglePicker}>
            <i className="far fa-smile"></i>
          </button>
        </div>  
        {
          this.state.showPicker && 
            <Picker 
              showPreview={false} 
              style={pickerStyles}              
              onSelect={this.handleEmojiClick}
            />
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '1rem 1rem',
    position: 'relative',

    ':hover': {
      backgroundColor: '#f6f6f6',
    },
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  reactionButton: {
    position: 'absolute',
    border: 0,
    outline: 0,
    padding: 0,
    backgroundColor: 'transparent',
    fontSize: '1rem',
    top: '0.5rem',
    right: '0.5rem',
    cursor: 'pointer',
    color: '#ccc',

    ':hover': {
      color: '#3366ff',
    },
  },

  reactions: {
    display: 'flex',
    marginTop: '0.5rem',
  },

})

const pickerStyles = {
  position: 'absolute',
  top: '-20rem',
  right: '2rem',
}

export default Message
