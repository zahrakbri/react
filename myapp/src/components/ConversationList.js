import React from 'react'
import Conversation from './conversation'
export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList : [
        {
          firstname: "zahra",
          lastName: "kabiri",
          profile: "url1",
          date: '2/10',
          latestMessage: 'salam',
          unseenMessages: 10,
          
        },{
          firstname : "hassan",
          profile: "url2",
          date: '2/10',
          latestMessage: 'salam'
        },{
          firstname : "hosein",
          profile: "url3",
          date: '2/10',
          latestMessage: 'salam'
        },{
          firstname : "ali",
          profile: "url4",
          date: '2/10',
          latestMessage: 'salam'
        }
      ]
    }
  }


  render () {
    return (
      <div className='d1'>
      { this.state.conversationList.map( (conversation, index) => {
        return (
          <Conversation
          key = {index}
          name={conversation.firstname}
          date='3/2'
          latestMessage='salammmm'
        />
        )
      }
      )

      }
      </div>
    )
  }
}
