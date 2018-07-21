import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Emoji } from 'emoji-mart'

const Reaction = ({ message, emoji, hasReacted }) => {
  return (
    <div className="reaction">
      <button>
        <Emoji emoji={emoji} size={16} />
        {message.reactions[emoji].length}
      </button>
    </div>
  )
}

const styles = StyleSheet.create({
  
})

export default Reaction
