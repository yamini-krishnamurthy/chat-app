import React, { Component } from 'react'

class RoomForm extends Component {
  state = {
    room: {
      name: '',
      description: '', 
    }
  }

  handleNameChange = (event) => {
    let room = {...this.state.room}
    room.name = event.target.value
    this.setState({
      room,
    })
  }

  handleDescriptionChange = (event) => {
    let room = {...this.state.room}
    room.description = event.target.value
    this.setState({
      room,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRoom(this.state.room) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Room name"
          value={this.state.room.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Room description"
          value={this.state.room.description}
          onChange={this.handleDescriptionChange}
        />
        <button type="submit">Add room</button>
      </form>
    )
  }
}

export default RoomForm

