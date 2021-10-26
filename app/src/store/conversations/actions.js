import {
    HANDLE_CHANGE_MESSAGE_VALUE,
    CREATE_CONVERSATION,
    CLEAR_MESSAGE_VALUE,
} from "./types";

export const handleChangeMessageValue = (text, roomId) => ({
    type: HANDLE_CHANGE_MESSAGE_VALUE,
    payload: { text, roomId },
});

export const createConversation = (name) => ({
    type: CREATE_CONVERSATION,
    payload: name,
});

export const clearMessageValue = (roomId) => ({
    type: CLEAR_MESSAGE_VALUE,
    payload: roomId,
});