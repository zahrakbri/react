import React from 'react'

export default class ChatScreen extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    console.log('111111',this.props.messages)
    return(
      <div className='screen'>
        {this.props.messages.map( (item, index) => {
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
        </div> */}

        {/* <div className='sender'>
          <span className = 'message'>{this.props.newMessage}</span>
        </div>  */}
      </div>
    )
  }
}