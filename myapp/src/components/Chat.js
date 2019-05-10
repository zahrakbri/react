import React from 'react'
import profile from '../images/profile.png'
import send from '../images/send.png'
import ChatScreen from './ChatScreen'

export default class Chat extends React.Component {
  render () {
    return (
      <div className='d2'>
        <div className='header'>
          <img src={profile} style={{ width: '30px', margin: '0 5px'}} />
          <span> zahra </span>
        </div>

        <ChatScreen />

        <div className='footer'>
          <input placeholder='write a message...' />
          <img src={send} style={{width: '20px'}} />
        </div>
      </div>
    )
  }
}
