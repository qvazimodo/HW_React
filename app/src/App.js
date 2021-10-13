import { useEffect, useState } from "react";
import List from'./Message/Message.js';
import './Message/Message.css';
import Form from'./Form/Form.js';
import './Form/form.css';
import './App.css';


export default function App() {
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
        <div className = 'App'>
            <List
                messageList = {messageList}
            />

            <Form
                handleSubmit = {handleSubmit}
                text = {text}
                handleChange = {(event)=> setText(event.target.value)}
            />

        </div>
    );
}

