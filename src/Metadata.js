import React from 'react'

const Metadata = (props) => {
  return (
    <div className="Metadata" style={styles.metadata}>
      <div style={styles.user}>{props.message.user.email}</div>
      <div style={styles.time}>2:40</div>
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
