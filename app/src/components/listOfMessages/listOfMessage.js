import { useEffect, useState} from "react";
import {Input, InputAdornment, List, ListItem, ListItemText} from "@mui/material";
import { Send } from "@mui/icons-material";
import Message from './Message/Message.js';
import styles from'./listOfMessages.module.css';


export const  ListOfMessages = ({ messageList, sendMessage, text, handleChangeValue }) => {



    const handlePressInput = ({ code }) => {
        if (code === "Enter" && text) {
            sendMessage({ text, author: "User" });

        }
    };


    const handleSubmit = () => {

        if(text) {
            sendMessage({ text, author: "User" });

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
                onChange={handleChangeValue}
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