// import { format } from "date-fns";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useSelector } from "react-redux";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { lastMessageSelector } from "../../../store/messages";
import { makeStyles } from "@mui/styles";
import styles from "./Room.module.css";

const useStyles = makeStyles(() => {
    return {
        item: {
            "&.Mui-selected": {
                backgroundColor: "#2b5278",
            },
            "&.Mui-selected:hover": {
                backgroundColor: "#2b5278",
            },
        },
    };
});

export  function Room({title,selected, handleListItemClick }) {
    const s = useStyles();

    // const lastMessage = useSelector(lastMessageSelector(title));
    // console.log("!!!", lastMessage);

    return (
        <ListItem
            className={s.item}
            button={true}
            selected={selected}
            onClick={handleListItemClick}
        >
            <ListItemIcon>
                <AccountBoxIcon fontSize="large" className= {styles.icon} />
            </ListItemIcon>
            <div className={styles.description}>
                <ListItemText className={styles.text} primary={title} />
                <ListItemText className={styles.text} primary="12.30" />
                {/*{lastMessage && (*/}
                {/*    <>*/}
                {/*        <ListItemText*/}
                {/*            className={styles.text}*/}
                {/*            primary={`${lastMessage.author}: ${lastMessage.text}`}*/}
                {/*        />*/}
                {/*        <ListItemText*/}
                {/*            className={styles.text}*/}
                {/*            primary={format(new Date(lastMessage.date), "yyyy-MM-dd")}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*)}*/}
            </div>
        </ListItem>




    );




}