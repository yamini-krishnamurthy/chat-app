import React from 'react'

const ChatHeader = (props) => {
  return (
    <header className="ChatHeader" style={styles.chatHeader}>
      <div className="roomInfo">
        <h2 style={styles.h2}>#{props.room.name}</h2>
        <p style={styles.p}>{props.room.description}</p>
        <button
          style={styles.button}
          onClick={() => props.removeRoom(props.room.name)}
        >
          <i className="far fa-trash-alt" title="Delete room"></i>
        </button>
      </div>
    </header>
  )
}

const styles = {
  chatHeader: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  h2: {
    fontSize: '1.1rem',
    margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  },

  button: {
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    padding: 0,
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'rgba(0,0,0, 0.4)',
  },

}


export default ChatHeader
