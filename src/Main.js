import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    rooms: {
      s3morning: {
        name: 's3-morning',
        description: 'Ask questions and share code'
      },

      general: {
        name: 'general',
        description: 'Chat about general stuff',
      },

      random: {
        name: 'random',
        description: 'Chat about anything you want!',
      }
    },
    room: {
      name: 's3-morning',
      description: 'Ask questions and share code!',
    }
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar rooms={this.state.rooms} signOut={this.props.signOut} user={this.props.user}/>
        <Chat user={this.props.user} room={this.state.room}/>
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
