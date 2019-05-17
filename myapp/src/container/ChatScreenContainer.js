import { connect } from 'react-redux'
import ChatScreen from '../components/ChatScreen'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
  })

const mapStateToProps = state =>{
  console.log(state)
  return {
    newMessage: state.newMessage
  }
}


const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer