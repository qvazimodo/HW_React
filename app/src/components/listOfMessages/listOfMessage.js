import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import {Input, InputAdornment, List, ListItem, ListItemText} from "@mui/material";
import { Send } from "@mui/icons-material";
import {
    handleChangeMessageValue,
    messageValueSelector,
} from "../../store/conversations";
import { sendMessageWithThunk, messagesSelector } from "../../store/messages";
import {Message} from './Message/Message.js';
import styles from'./listOfMessages.module.css';
import { useMemo } from "react";


export const  ListOfMessages = () => {
    const { roomId } = useParams();

    const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);

    const dispatch = useDispatch();
    const text = useSelector(messageValue);

    const messageList = useSelector(messagesSelector(roomId));


    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            handleSubmit();

        }
    };


    const handleSubmit = () => {

        if (text) {
            dispatch(sendMessageWithThunk({ author: "User", text }, roomId));
        }
    };


    return (
        <>
        <div>
            {messageList.map((mess, index) => (
                <Message
                    key = {mess.text}
                    mess = {mess}
                />
            ))}
        </div>

             <Input

                value={text}
                onChange={(e) =>
                    dispatch(handleChangeMessageValue(e.target.value, roomId))}
                placeholder="Введите сообщение..."
                autoFocus={true}
                fullWidth={true}
                onKeyPress={handlePressInput}
                endAdornment={
                    <InputAdornment position="end">
                        {text && (
                            <Send className={styles.icon} onClick={handleSubmit} />
                        )}
                    </InputAdornment>
                }
            />

        </>
    );
};