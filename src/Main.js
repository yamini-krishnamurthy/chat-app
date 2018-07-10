import React, { Component } from 'react'
import base from './base'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    rooms: {},
    room: {
      name: 'general',
      description: 'talk about general things', 
    }
  }

  componentDidMount = () => {
    this.ref = base.syncState(`rooms`, {
      context: this,
      state: `rooms`,
    })
  } 


  componentWillUnmount = () => {
    base.removeBinding(this.ref)
  }

  addRoom = (room) => {
    let rooms = {...this.state.rooms}
    rooms[room.name] = room
    this.setState({
      rooms,
      room,
    })
  }

  setCurrentRoom = (roomName) => {
    const room = this.state.rooms[roomName]
    this.setState({
      room
    })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar rooms={this.state.rooms} signOut={this.props.signOut} user={this.props.user} setCurrentRoom={this.setCurrentRoom} addRoom={this.addRoom}/>
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
