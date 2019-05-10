import React from 'react'
import profile from '../images/profile.png'

export default class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        <div className='profileContainer' >
          <img src={profile} style={{ width: '30px' }} />
        </div>
        <div className='contentContainer'>
          <div className='inf'>
            <span>zahra</span>
            <span>2/3</span>
          </div>
          <div className='inf'>
            <span>salamdfg!</span>
            <span>3</span>
          </div>
        </div>
      </div>
    )
  }
}
