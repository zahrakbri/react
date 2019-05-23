import React from 'react'
import profile from '../images/profile.png'

export default class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        <div className='profileContainer' >
          <img src={this.props.avatar} style={{ width: '30px' }} />
        </div>
        <div className='contentContainer'>
          <div className='inf'>
            <span>{this.props.name}</span>
            <span style={{fontSize: '10px', color: '#999'}}>{this.props.date.slice(0,10)}</span>
          </div>
          <div className='inf'>
            <span>{this.props.latestMessage}</span>
            <span>3</span>
          </div>
        </div>
      </div>
    )
  }
}
