import React from 'react'
import Conversation from './conversation'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'


export default class ConversationList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conversationList : [],
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      suggestedUsers: []
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

  handleChange(e) {
    // let data = {
    //   token: this.state.token,
    //   query: e.target.value,
    //   size: 4,
    // }
    let fdata = new FormData()
    fdata.append('token',  this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)
    console.log('fdatta', fdata)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        console.log('response::::',response);
        this.setState({ suggestedUsers: response.data.data.users})
      })
      .catch((error) => {
        console.log('error::::',error);
      });
  }

  render () {
    console.log('props:::::', this.state.myId)
    return (
      <div className='d1'>
        <div>
          <input
            className='search'
            placeholder = 'type a name...'
            onChange = {(e) => this.handleChange(e)}
            />
          { this.state.suggestedUsers.map((user, index) => {
            return(
              <p className='suggest'><img src={user.avatar_url} className='suggestedAvatar'/> {user.email}</p>
            )
          })

          }
        </div>
      { this.props.conversationList.map( (conversation, index) => {
        return(
          conversation.users.map((user, idx) => {
            if(user.id != this.state.myId) {
              return (
                <Conversation
                key = {index}
                name={user.name}
                date={conversation.latest_message_date}
                latestMessage={conversation.latest_message}
                avatar = {user.avatar_url}
              />
              )
            }
          })
        )
      })

      }
      </div>
    )
  }
}
