import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Room = (props) => {
  return (
    <li className={css(styles.item)}>
      <a className={css(styles.link)} onClick={() => props.setCurrentRoom(props.roomName)}>
        {props.roomName}
      </a>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room
