import { stat } from "fs";

const INIT = {
<<<<<<< HEAD
  newMessage: ''
=======
  newMessage: '',
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
>>>>>>> 26836e6df25319a9987923e4e00e6fa2140b22ea
}

function conversation(state = INIT, action) {
  switch(action.type) {
    case 'SAVE_NEW_MESSAGE':
      return {...state,
        newMessage: action.payload,
        messages: [...state.messages, {id: 1, message: action.payload}]
      }
    
    default:
      return state
  }

}

export default conversation