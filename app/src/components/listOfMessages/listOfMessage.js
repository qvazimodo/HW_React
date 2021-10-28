import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import {Input, InputAdornment, List, ListItem, ListItemText} from "@mui/material";
import { Send } from "@mui/icons-material";
import {
    handleChangeMessageValue,
    messageValueSelector,
    clearMessageValue,
} from "../../store/conversations";
import {messagesSelector, sendMessage} from "../../store/messages";
import { Message } from "./Message";
import styles from'./listOfMessages.module.css';
import React, { useMemo } from "react";


export const  ListOfMessages = () => {
    const { roomId } = useParams();

    const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);

    const dispatch = useDispatch();
    const value = useSelector(messageValue);

    const messages = useSelector(messagesSelector(roomId));



    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            handleSubmit();

        }
    };


    const handleSubmit = () => {

        if (value) {
            dispatch(sendMessage({ author: "User", value }, roomId));
            dispatch(clearMessageValue(roomId));

        }
    };


    return (
        <>
        <div>
            {messages.map((message, id) => (
                <Message key={message.value} message={message} />
            ))}
        </div>

             <Input

                value={value}
                onChange={(e) =>
                    dispatch(handleChangeMessageValue(e.target.value, roomId))}
                placeholder="Введите сообщение..."
                autoFocus={true}
                fullWidth={true}
                onKeyPress={handlePressInput}
                endAdornment={
                    <InputAdornment position="end">
                        {value && (
                            <Send className={styles.icon} onClick={handleSubmit} />
                        )}
                    </InputAdornment>
                }
            />

        </>
    );
};