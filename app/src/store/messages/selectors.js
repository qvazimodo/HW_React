export const lastMessageSelector = (roomId) => (state) => {
    console.log("lastMEssageSel:", state.messages.messages[roomId]);
    const messages = state.messages.messages[roomId];

    return messages[messages.length - 1];
};

export const messagesSelector = (roomId) => (state) => {
    console.log("!@#$:::",state.messages.messages[roomId]);
    return state.messages.messages[roomId];
};
