export default function Form(props){
  return(
    <form className="form" onSubmit = {props.handleSubmit} >
        <label> Сообщение
          <input type='text' value = {props.text} onChange = {props.handleChange}/>
        </label>
        <input type="submit" value="Отправить" />
        
        
      </form>
  )
}