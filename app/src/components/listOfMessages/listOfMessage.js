import { useEffect, useState } from "react";
import {Input, InputAdornment, List, ListItem, ListItemText} from "@mui/material";
import { Send } from "@mui/icons-material";
import Message from './Message/Message.js';
import styles from'./listOfMessages.module.css';


export const  ListOfMessages = () => {
    const[text, setText] = useState('');
    const[messageList, setMessageList] = useState([
        { author: "Bot", text: "Hello"},
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text) {
            setMessageList((state) => [...state, {author: "User", text}]);
            setText("");
        }
    };

    useEffect(()=>{
            const lastMessage = messageList[messageList.length - 1];
            if(lastMessage.author === "User") {
                setTimeout(()=>{
                    setMessageList((state) => [...state, {author: "Bot", text: "What do you want for me?"}]);
                },1500)
            }

        },[messageList]

    )

    return (
        <div className = 'ListOfMessages'>
            {messageList.map((mess, index) => (
                <Message
                    key = {index}
                    mess = {mess}
                />
            ))}

             <Input
                // className={s.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите сообщение..."
                autoFocus={true}
                fullWidth={true}
                // onKeyPress={handlePressInput}
                endAdornment={
                    <InputAdornment position="end">
                        {text && (
                            <Send className={styles.icon} onClick={handleSubmit} />
                        )}
                    </InputAdornment>
                }
            />

        </div>
    );
}