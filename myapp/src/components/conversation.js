import React from 'react'

export default class Conversation extends React.Component {
  render() {
    return(
        <div className='conv'>
          <p>
            <span>
              {this.props.name}
            </span>
            <span>
              {this.props.date}
            </span>
          </p>
          <div>
            <span>
              {this.props.latestMessage}
            </span>
          </div>
        </div>
    )
  }
}