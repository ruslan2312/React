import React from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    return (
        <div className={style.dialog}>

            <img className={style.img} src={props.img} />
            <NavLink to={/messages/ + props.id} className={style.text}> {props.name}</NavLink>
        </div>
    )
}
export default DialogItem;