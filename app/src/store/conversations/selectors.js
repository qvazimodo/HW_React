export const messageValueSelector = (roomId) => (state) => {
    return (
        state.conversations.conversations.find(
            (conversation) => conversation.title === roomId
        )?.text ?? ""
    );
};

export const conversationsSelector = (state) =>
    state.conversations.conversations;