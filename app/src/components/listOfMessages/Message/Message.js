import classNames from "classnames";
import styles from "./Message.module.css";
import { format } from "date-fns";
import { memo } from "react";

export const Message = memo(({mess}) => {
    const {text, author, date} = mess;
  return(
    <div className ={classNames(styles.message,{[styles.currentMessage]:author === "User"})} >
      <h3> {author} </h3>
      <p> {text}   </p>
        <p>{format(new Date(date), "yyyy-MM-dd")}</p>
  
    </div>
  )
});