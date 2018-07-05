import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = (props) => {
  return (
    <div className="Message" style={styles.message}>
      <Avatar user={props.message.user} />
      <div className="details" style={styles.details}>
        <Metadata message={props.message} />
        <div className="body">
          {props.message.body}
        </div>
      </div>
    </div>
  )
}

const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },
}

export default Message
