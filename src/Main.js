import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import base from './base'
import Sidebar from './Sidebar'
import Chat from './Chat'
import RoomForm from './RoomForm'

class Main extends Component {
  state = {
    //set a current room by default
    room: {},
    rooms: {},
  }


  //use re-base to sync the list of rooms with firebase's db
  componentDidMount() {
    this.roomsRef = base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        //after the state is synced, load the current room
        then: this.setRoomFromRoute,
      }
    )
  }

  //if the page is re-rendered, AND the current room has changed, then we set the current room in main's state
  componentDidUpdate(prevProps) {
    const { roomName } = this.props.match.params
    if (prevProps.match.params.roomName !== roomName) {
      this.setRoomFromRoute()
    }
  }

  //room list binding is removed
  componentWillUnmount() {
    base.removeBinding(this.roomsRef)
  }

  //when you enter the room name into the url, the room is loaded (IF THE ROOM EXISTS!)
  setRoomFromRoute = () => {
    const { roomName } = this.props.match.params
    if(roomName)
      this.setCurrentRoom(roomName)
  }

  filterRooms = () => {
    const roomNames = this.filterRoomNames()
    const memberRooms = {}
    for(let roomName of roomNames) {
      memberRooms[roomName] = this.state.rooms[roomName]
    }
    return memberRooms
  }

  filterRoomNames = () => {
    return Object.keys(this.state.rooms).filter(roomName => {
      const room = this.state.rooms[roomName]
      if(!room)  return false
      return !room.private || this.includesCurrentUser(room)
    })
  }

  includesCurrentUser = (room) => {  
    const users = room.users
    return users.find(user => user.value === this.props.user.uid)
  }

  //add a room to list of rooms
  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room

    this.setState({ rooms })
  }

  //remove a room from list of rooms
  removeRoom = (roomName) => {
    const rooms = {...this.state.rooms}
    rooms[roomName] = null

    this.setState(
      { rooms },
      this.loadValidRoom
    )
  }

  //set the current room given the room name (IF THE ROOM EXISTS!)
  setCurrentRoom = roomName => {
    const room = this.state.rooms[roomName]

    if (room) {
      //a valid room name wasn't passed
      this.setState({ room })
    } else {
      //a valid room name was passed, in which case the first room in the list is set as the current room 
      this.loadValidRoom()
    }
  }

  //load the first room in the list of rooms as long as the list has rooms
  loadValidRoom = () => {
    const roomNames = Object.keys(this.state.rooms)
    if (roomNames.length > 0) {
      const roomName = roomNames[0]
      this.props.history.push(`/chat/rooms/${roomName}`)
    }
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Switch>
          <Route
            path="/chat/new-room"
            render={(navProps) => (
              <RoomForm
                addRoom={this.addRoom}
                users={this.props.users}
                user={this.props.user}
                {...navProps}
              />
            )}
          />
          <Route
            path="/chat/rooms/:roomName"
            render={() => (
              <Fragment>
                <Sidebar
                  user={this.props.user}
                  signOut={this.props.signOut}
                  rooms={this.filterRooms()}
                />
                <Chat
                  user={this.props.user}
                  room={this.state.room}
                  removeRoom={this.removeRoom}
                />
              </Fragment>
            )}
          />
          <Route render={() => (
            <Redirect to="/chat/rooms/general" />
          )} />
      </Switch>
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
