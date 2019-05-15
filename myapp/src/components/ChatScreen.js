import React from 'react'

export default class ChatScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      messages : [
        {
          id: 1,
          message: 'salam'
        },
        {
          id: 2,
          message: 'salam'
        },
        {
          id: 1,
          message: 'khoobi?'
        }
      ]
    }
  }
  render() {
    return(
      <div className='screen'>
        {this.state.messages.map( (item, index) => {
          if(item.id === 1) {
            return(
              <div className='sender'>
                <span className = 'message'>{item.message}</span>
              </div>
            )
          } else {
            return(
              <div className='receiver'>
                <span className = 'message'>{item.message}</span>
              </div>
            )
          }
          
        }

        )

        }
        {/* <div className='receiver'>
          <span className = 'message'>salammm</span>
        </div>

        <div className='sender'>
          <span className = 'message'>salammm!!!!</span>
        </div> */}
      </div>
    )
  }
}