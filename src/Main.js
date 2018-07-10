import React, { Component } from 'react'
import base from './base'

import Sidebar from './Sidebar'
import Chat from './Chat'
import Welcome from './Welcome'
import RoomForm from './RoomForm'

class Main extends Component {
  state = {
    inRoom: false,
    showRoomForm: false,
    rooms: {},
    room: {}
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
    const roomNames = Object.keys(this.state.rooms)
    for(let roomName of roomNames) {
      if(roomName === room.name)
        alert('That room already exists!')
    }
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
      inRoom: true,
      room,
    })
  }

  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }

  hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }

  render() {
    if(this.state.showRoomForm)
      return (
        <RoomForm addRoom={this.addRoom} hideRoomForm={this.hideRoomForm}/>
      )
    let element = this.state.inRoom ? <Chat user={this.props.user} room={this.state.room}/> : <Welcome />
    return (
      <div className="Main" style={styles}>
        <Sidebar rooms={this.state.rooms} signOut={this.props.signOut} user={this.props.user} setCurrentRoom={this.setCurrentRoom} showRoomForm={this.showRoomForm} />
        {element}
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
