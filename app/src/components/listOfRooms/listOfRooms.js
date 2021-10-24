import {List, ListItem, ListItemText } from "@mui/material";
import Room from "./Room/Room.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ListOfRooms = ( {createConversation, conversations} ) => {
    const params = useParams();

    // const [chats] = useState ([ "Red", "Zlobin", "Class99"]);
    // const [selectedIndex, setSelectedIndex] = useState(false);

    return (

        <List component= 'nav' sx={{ width: '40%', bgcolor: 'background.paper', border: "10px", backgroundColor: "darkgrey" }}>
            <button onClick={createConversation}>Создать беседу</button>
             {conversations.map((chat, index) => (
                 <Link key={index} to={`/chat/${chat.title}`}>
                <Room  title={chat.title} selected={chat.title === params.roomId} />
                </Link>
            ))}

         </List>

    );
};