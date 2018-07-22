import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Emoji } from 'emoji-mart'

import './App.css'

const Reaction = ({ message, emoji, hasReacted, addOrRemoveReaction }) => {
  let extraClass = ''
  if(hasReacted(message, emoji))
    extraClass = 'reacted'

  return (
    <button className={`${extraClass} ${css(styles.button)}`} onClick={() => addOrRemoveReaction(message, emoji)}>
      <Emoji emoji={emoji} size={16} />
      <span className={css(styles.count)}>
        {message.reactions[emoji].length}
      </span>
    </button>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    outline: 0,
    borderRadius: '8px',
    padding: '0.125rem 0.25rem',
    marginRight: '0.25rem',
    cursor: 'pointer',

    ':hover': {
      border: '1px solid #3399ff',
    },
  },

  count: {
    marginLeft: '0.25rem',
    fontSize: '0.6rem',
  },
})

export default Reaction
