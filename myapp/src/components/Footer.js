import React from 'react'
import send from '../images/send.png'
<<<<<<< HEAD
import { addNewMessage } from '../action/conversation'
=======
import {addNewMessage} from '../action/conversation'
>>>>>>> 26836e6df25319a9987923e4e00e6fa2140b22ea

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

  sendNewMessage() {
    this.props.dispatch(addNewMessage(this.state.newMessage))
  }
  render () {
    console.log('props', this.props)
    return (
        <div className='footer'>
          <input
            placeholder='write a message...'
            value = {this.state.newMessage}
            onChange = {(e) => this.onChangeText(e)} />
<<<<<<< HEAD
          <img
            src={send}
            onClick={() => this.sendNewMessage()}
            style={{width: '20px'}} />
=======
          <img src={send} style={{width: '20px'}} onClick={() => this.props.dispatch(addNewMessage(this.state.newMessage))} />
>>>>>>> 26836e6df25319a9987923e4e00e6fa2140b22ea
        </div>
    )
  }
}
