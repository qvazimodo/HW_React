import classNames from "classnames";
import styles from "./Message.module.css";
// import { format } from "date-fns";
import { memo } from "react";

export const Message = memo(({message}) => {
    const { author, value } = message;
  return(
    <div className ={classNames(styles.message,{[styles.currentMessage]:author === "User"})} >
      <h3> {author} </h3>
      <p> {value}   </p>
        <p>12.03</p>
        {/*<p>{format(new Date(date), "yyyy-MM-dd")}</p>*/}
  
    </div>
  )
});