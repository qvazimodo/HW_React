import {List, ListItem, ListItemText } from "@mui/material";
import {Room} from "./Room/Room.js";
import {
    conversationsSelector,
    createConversation,
} from "../../store/conversations";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import React from "react";

export const ListOfRooms = (  ) => {
    const params = useParams();

    const conversations = useSelector(conversationsSelector);
    console.log("?conv:", conversations)
    const dispatch = useDispatch();

    const createConversationWithName = () => {
        const title = prompt("введите название беседы:");

        if (title) {
            dispatch(createConversation(title));
        }
    };



    return (

        <List component= 'nav' >
            <button onClick={createConversationWithName}>Создать беседу</button>
             {conversations.map((chat, index) => (

                 <Link key={index} to={`/chat/${chat.title}`}>
                <Room
                    title={chat.title}
                    selected={chat.title === params.roomId}

                />
                </Link>
            ))}

         </List>

    );
};