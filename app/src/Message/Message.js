export default function List(props){
  return(
    props.messageList.map((mess, index) => 
    <div className = "message-list" key = {index}>
      <div className='message-author'> {mess.author} </div>
      <div className='message-text'> {mess.text}   </div>
  
    </div>)
  )
}