import {List, ListItem, ListItemText } from "@mui/material";

export const ListOfRooms = () => {

    return (

        <List sx={{ width: '40%', bgcolor: 'background.paper', border: "10px", backgroundColor: "darkgrey" }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                >
                    <ListItemText primary={`Room ${value}`} />
                </ListItem>
            ))}
        </List>


    );




};