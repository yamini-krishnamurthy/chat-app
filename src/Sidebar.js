import React, { Component } from 'react'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {props.user.displayName}
    </div>
  )
}

export default Sidebar
