import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class MessageForm extends Component {
  state = {
      body: '',
  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMessage(this.state.body)
    this.setState({
      body: '',
    })
  }

  render() {
    return (
      <form className={`MessageForm ${css(styles.messageForm)}`} onSubmit={this.handleSubmit} style={styles.messageForm}>
        <div className={css(styles.icon)} style={styles.icon}>
          <i className="fas fa-comment-alt"></i>
        </div>
        <input
          name="body"
          type="text"
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
          className={css(styles.input)}
          style={styles.input}
          autoFocus
          required
        />
        <button type="submit" className={css(styles.button)} style={styles.button}>
            <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
    )
  }
}

const styles = StyleSheet.create({
  messageForm: {
    backgroundColor: 'white',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0,
  },

  icon: {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#ccc',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
  },

  input: {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,

    ':focus': {
      outline: 0,
    },
  },

  button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
  }
})

export default MessageForm
