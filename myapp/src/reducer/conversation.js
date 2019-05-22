
const INIT = {
  newMessage: '',
  messages: [],
  conversationList : []
}

function conversation(state = INIT, action) {
  switch(action.type) {
    case 'SAVE_NEW_MESSAGE':
      return {...state,
        newMessage: action.payload,
        messages: [...state.messages, {id: 1, message: action.payload}]
      }
    
    case 'SAVE_CONVERSATION_LIST':
    return {
      ...state,
      conversationList: action.payload
    }
    default:
      return state
  }

}

export default conversation