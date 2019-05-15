import React from 'react'
import send from '../images/send.png'

export default class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      newMessage : '',
    }
  }

  onChangeText(e) {
    this.setState({newMessage: e.target.value})
    this.props.getNewMessage(e.target.value)
  }
  render () {
    return (
        <div className='footer'>
          <input
            placeholder='write a message...'
            value = {this.state.newMessage}
            onChange = {(e) => this.onChangeText(e)} />
          <img src={send} style={{width: '20px'}} />
        </div>
    )
  }
}
