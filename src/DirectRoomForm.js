import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Select from 'react-select'

class DirectMessageForm extends Component {
  state = {
    room: {
      name: '',
      description: 'Direct Message', 
      dm: true,
      private: true,
      users: [],
    }
  }

  handleChange = (event) => {
    let room = {...this.state.room}
    const target = event.target

    room[target.name] = value
    
    this.setState({
      room,
    })
  }

  handleSelectChange = (selectedValue) => {
    const room = {...this.state.room}
    if(room.users.length === 1) {
      return
    }
    else {
      room.users = selectedValue
      this.setState({ room }) 
    }
  }

  users = () => {
    const { users } = this.props
    delete users[this.props.user.uid]
    return Object.keys(this.props.users).map(
      uid => {
        const user = this.props.users[uid]
        console.log(user.displayName)
        return {
          value: uid,
          label: user.displayName === undefined ? `${user.email}` : `${user.displayName} (${user.email})`
        }
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()              //stop the form from refreshing on submit
    this.props.addRoom(this.state.room) //add the room to the list of rooms in Main
    this.props.history.push(`/chat/rooms/${this.state.room.name}`)         //exit the add room form page
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}>Start a conversation</h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <div>
              <label
                htmlFor="users"
                className={css(styles.label)}
              >
                Start a conversation
              </label>
              <Select 
                name="users"                    
                isMulti
                onChange={this.handleSelectChange}
                value={this.state.room.users}
                className={css(styles.input)}
                options={this.users()}
              />
            </div>
            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.history.goBack}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={css(styles.button)}
              >
                Go
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f6f6f6',
    zIndex: 1000,
  },

  title: {
    color: '#ff3344',
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    padding: '0 2rem 2rem',
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    margin: '1rem auto',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  textInput: {
    width: '20rem',
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
  },

  cancel: {
    backgroundColor: 'white',
    color: '#666',
  },
})

export default DirectMessageForm
