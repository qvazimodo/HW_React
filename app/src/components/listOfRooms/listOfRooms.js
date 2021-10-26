import {List, ListItem, ListItemText } from "@mui/material";
import {Room} from "./Room/Room.js";
import {
    conversationsSelector,
    createConversation,
} from "../../store/conversations";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const ListOfRooms = (  ) => {
    const params = useParams();

    const conversations = useSelector(conversationsSelector);
    const dispatch = useDispatch();

    const createConversationWithName = () => {
        const title = prompt("введите название беседы:");

        if (title) {
            dispatch(createConversation(title));
        }
    };



    return (

        <List component= 'nav' sx={{ width: '40%', bgcolor: 'background.paper', border: "10px", backgroundColor: "darkgrey" }}>
            <button onClick={createConversationWithName}>Создать беседу</button>
             {conversations.map((chat, index) => (
                 <Link key={index} to={`/chat/${chat.title}`}>
                <Room  title={chat.title} selected={chat.title === params.roomId}
                       {...chat}
                />
                </Link>
            ))}

         </List>

    );
};