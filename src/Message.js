import React from 'react'

import { css, StyleSheet } from 'aphrodite'
import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = (props) => {
  return (
    <div className={`Message ${css(styles.message)}`}>
      <Avatar user={props.message.user} />
      <div className={css(styles.details)}>
        <Metadata message={props.message} />
        <div className="body">
          {props.message.body}
        </div>
        <button className={`reactionButton ${css(styles.reactionButton)}`}>
          <i className="far fa-smile"></i>
        </button>
      </div>
    </div>
  )
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

export default Message
