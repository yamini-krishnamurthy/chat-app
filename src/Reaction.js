import React from 'react'
import { Emoji } from 'emoji-mart'

const Reaction = (props) => {
  return (
    <div className="reaction">
      <Emoji emoji={props.emojiColon} size={16} />
      {props.numOfReactions}
    </div>
  )
}

export default Reaction
