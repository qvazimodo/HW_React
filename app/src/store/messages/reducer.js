import { SEND_MESSAGE } from "./types";

const initialState = {
    messageList: {
        Red: [{ text: "Red", author: "Bot", date: new Date() }],
        Zlobin: [{ text: "Zlobin", author: "Bot", date: new Date() }],
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.roomId]: [
                        ...state.messageList[action.payload.roomId],
                        { ...action.payload.message, date: new Date() },
                    ],
                },
            };
        default:
            return state;
    }
};
