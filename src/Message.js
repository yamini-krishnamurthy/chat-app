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
    console.log(emoji.colons)
    this.props.hasReacted(this.props.message, emoji.colons)
    this.togglePicker()
  }

  render() {
    return (
      <div className={`Message ${css(styles.message)}`}>
        <Avatar user={this.props.message.user} />
        <div className={css(styles.details)}>
          <Metadata message={this.props.message} />
          <div className="body">
            {this.props.message.body}
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
        <div className="reactions">
          { this.props.message.reactions && Object.keys(this.props.message.reactions).map(emoji => (
            <Reaction emoji={emoji} numOfReactions={this.props.message.reactions[emoji].length} />
          )
          )}
        </div>  
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

})

const pickerStyles = {
  position: 'absolute',
  top: '-20rem',
  right: '2rem',
}

export default Message
