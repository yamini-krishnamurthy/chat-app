import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style={styles.message}>
      <div
        className="Avatar"
      ></div>
      <div className="details" style={styles.details}>
        <div className="Metadata" style={styles.metaData}>
          <div className="user" style={styles.user}>{props.message.user.displayName}</div>
          <div className="time" style={styles.time}>{Date.now()}</div>
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
