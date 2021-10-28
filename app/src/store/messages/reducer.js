import { nanoid } from "nanoid";
import { SEND_MESSAGE } from "./types";

const initialState = {
    messages: {
        room1: [{ value: "room1", author: "Bot", id: nanoid() }],
        room2: [{ value: "room2", author: "Bot", id: nanoid() }],
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomId]: [
                        ...state.messages[action.payload.roomId],
                        { ...action.payload.message, id: new Date() },
                    ],
                }
            };
        default:
            return state;
    }
};
