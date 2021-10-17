import {List, ListItem, ListItemText } from "@mui/material";
import Room from "./Room/Room.js";
import { useState } from "react";

export const ListOfRooms = () => {

    const [chats] = useState ([ "Red", "Zlobin", "Class99"]);
    const [selectedIndex, setSelectedIndex] = useState(false);

    return (

        <List component= 'nav' sx={{ width: '40%', bgcolor: 'background.paper', border: "10px", backgroundColor: "darkgrey" }}>
            {chats.map((chat, index) => (
                <Room
                    key={chat}
                    chat={chat}
                    selected={selectedIndex === index}
                    handleListItemClick={() => setSelectedIndex(index)}
                />
            ))}

         </List>


    );




};