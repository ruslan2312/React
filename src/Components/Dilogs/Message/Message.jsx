import React from "react";
import style from "../Dialogs.module.css";


const Message = (props) => {

    

    return (<div className={style.text}> {props.message} </div>)
}

export default Message;