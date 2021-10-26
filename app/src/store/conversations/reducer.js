import {
    HANDLE_CHANGE_MESSAGE_VALUE,
    CREATE_CONVERSATION,
    CLEAR_MESSAGE_VALUE,
} from "./types";

const initialState = {
    conversations: [
        { title: "Red", text: "" },
        { title: "Zlobin", text: "" },
    ],
};

const updateConversations = (state, roomId, text) =>
    state.conversations.map((conversation) => {
        return conversation.title === roomId
            ? { ...conversation, text }
            : conversation
    });

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                conversations: updateConversations(
                    state,
                    action.payload.roomId,
                    action.payload.text
                ),
            };
        case CREATE_CONVERSATION:
            return {
                ...state,
                conversations: [
                    ...state.conversations,
                    { title: action.payload, text: "" },
                ],
            };
        case CLEAR_MESSAGE_VALUE:
            return {
                ...state,
                conversations: updateConversations(state, action.payload, ""),
            };
        default:
            return state;
    }
};