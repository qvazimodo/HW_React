import classNames from "classnames";
import styles from "./Message.module.css";

export default function Message({mess}){
    const {text, author} = mess;
  return(
    <div className ={classNames(styles.message,{[styles.currentMessage]:author === "User"})} >
      <h3> {author} </h3>
      <p> {text}   </p>
  
    </div>
  )
}