import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Emoji } from 'emoji-mart'


class Reaction extends Component {
  generateClassName = () => {
    return this.props.hasReacted(this.props.message, this.props.emoji) ? css(styles.reacted) : css(styles.notReacted)
  }

  render() {
  return (
    <button className={this.generateClassName()} onClick={() => this.props.addOrRemoveReaction(this.props.message, this.props.emoji)}>
      <Emoji emoji={this.props.emoji} size={16} />
      <span className={css(styles.count)}>
        {this.props.message.reactions[this.props.emoji].length}
      </span>
    </button>
  )
  }
}

const styles = StyleSheet.create({
  notReacted: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #eee',
    outline: 0,
    borderRadius: '8px',
    padding: '0.125rem 0.25rem',
    marginRight: '0.25rem',
    color: '#999',
    cursor: 'pointer',

    ':hover': {
      border: '1px solid #3399ff',
    },
  },

  reacted: {
    backgroundColor: '#d4e1f4',
    border: '1px solid #3399ff',
    color: '#3399ff',
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
