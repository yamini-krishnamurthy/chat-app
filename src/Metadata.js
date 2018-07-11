import React from 'react'
import moment from 'moment'

const Metadata = (props) => {
  return (
    <div className="Metadata" style={styles.metadata}>
      <div style={styles.user}>{props.message.user.displayName}</div>
      <div style={styles.time}>{moment(props.message.createdAt).format('D MMM @ h:mm A')}</div>
    </div>
  )
}

const styles = {
  metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  },
}

export default Metadata
