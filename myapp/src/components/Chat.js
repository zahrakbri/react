import React from 'react'
import profile from '../images/profile.png'
import send from '../images/send.png'
import ChatScreen from './ChatScreen'
import Footer from './Footer'

export default class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      newMessage : '',
    }
  }

  getNewMessage(newMessage) {
    console.log('Im here:', newMessage)
    this.setState({newMessage})
  }
  render () {
    console.log('state', this.state.newMessage)
    return (
      <div className='d2'>
        <div className='header'>
          <img src={profile} style={{ width: '30px', margin: '0 5px'}} />
          <span> zahra </span>
        </div>

        <ChatScreen newMessage = {this.state.newMessage} />

        <Footer getNewMessage={(newMessage) => this.getNewMessage(newMessage)} />
      </div>
    )
  }
}
