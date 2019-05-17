export function addNewMessage = (newMessage) => ({
    type : 'SAVE_NEW_MESSAGE',
    payload: newMessage,
  })