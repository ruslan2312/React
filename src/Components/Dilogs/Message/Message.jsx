import React from "react";
import style from "../Dialogs.module.css";

const Message = (props) => {
    return (<div className={style.text}> <li> {props.message} </li></div>)
}

export default Message;