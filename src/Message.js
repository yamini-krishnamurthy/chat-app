import React from 'react'

import Avatar from './Avatar'

const Message = (props) => {
  return (
    <div className="Message" style={styles.message}>
      <Avatar user={props.user} />
      <div className="details" style={styles.details}>
        <div className="Metadata" style={styles.metaData}>
          <div className="user" style={styles.user}>{props.message.user.email}</div>
          <div className="time" style={styles.time}>2:40</div>
        </div>
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

  metaData: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  },
}

export default Message
