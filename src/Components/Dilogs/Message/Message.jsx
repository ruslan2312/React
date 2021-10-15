import React from "react";
import style from "../Dialogs.module.css";

const Message = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }

    return (<div className={style.text}> <textarea ref={newMessage}> </textarea> <button onClick={addMessage}> Отправить сообщение </button> {props.message} </div>)
}

export default Message;