import React from 'react'
import Conversation from './conversation'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'


export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList : [],
      myId: window.localStorage.getItem('id')
    }
    this.handleRequest = this.handleRequest.bind(this)
  }

  componentDidMount() {
    this.handleRequest()
  }

  handleRequest() {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
    .then(response => {
      this.props.dispatch(saveConversationList(response.data.data.conversation_details))
    })
    .catch(error => {
      console.log('1111111111',error);
    })
  }

  render () {
    console.log('props:::::', this.state.myId)
    return (
      <div className='d1'>
      { this.props.conversationList.map( (conversation, index) => {
        conversation.users.map((user, idx) => {
          if(user.id != this.state.myId) {
            return (
              <Conversation
              key = {index}
              name={user.name}
              date={conversation.latest_message_date}
              latestMessage={conversation.latest_message}
            />
            )
          }
        })
      }
      )

      }
      </div>
    )
  }
}
