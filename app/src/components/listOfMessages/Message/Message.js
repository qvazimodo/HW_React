import classNames from "classnames";
import styles from "./Message.css";

export default function Message({mess}){
    const {text, author} = mess;
  return(
    <div className ={classNames("message",{["currentMessage"]:author === "User"})} >
        {console.log(styles.message)}
      <h3> {author} </h3>
      <p> {text}   </p>
  
    </div>
  )
}