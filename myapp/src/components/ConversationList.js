import React from 'react'
import Conversation from './conversation'
export default class ConversationList extends React.Component {
  render () {
    return (
      <div className='d1'>
        <Conversation
          name='zahra'
          date='3/2'
          latestMessage='salammmm'
        />
        <Conversation
          name='rezvan'
          date='yesterday'
          latestMessage='salamm!'
        />
        <Conversation
          name='amir'
          date='5/3'
          latestMessage='hi'
        />

      </div>
    )
  }
}
