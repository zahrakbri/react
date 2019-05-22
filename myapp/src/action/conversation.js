export const addNewMessage = (newMessage) => ({
    type : 'SAVE_NEW_MESSAGE',
    payload: newMessage
  })

export const saveConversationList = (conversationList) => ({
  type : 'SAVE_CONVERSATION_LIST',
  payload: conversationList
})