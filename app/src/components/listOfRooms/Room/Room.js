import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
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

export default function Room({title,selected, handleListItemClick }) {
    const s = useStyles();

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
            </div>
        </ListItem>




    );




}