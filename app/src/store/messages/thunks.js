import { sendMessage } from "./actions";
import {clearMessageValue} from "../conversations";

export const sendMessageWithThunk =
    (message, roomId) => (dispatch, getState) => {
        console.log(getState());
        dispatch(sendMessage(message, roomId));
        dispatch(clearMessageValue(roomId));

        if (message.author === "User") {
          setTimeout(() => {
            dispatch(
              sendMessage({ author: "Bot", value: "What do you want for me?" }, roomId)
            );
          }, 500);
        }


    };