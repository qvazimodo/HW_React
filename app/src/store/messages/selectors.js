export const lastMessageSelector = (roomId) => (state) => {
    const messageList = state.messageList.messageList[roomId];

    return messageList[messageList.length - 1];
};

export const messagesSelector = (roomId) => (state) => {
    return state.messageList.messageList[roomId] || [];
};
