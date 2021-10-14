import React from "react";
import style from "./Name.module.css";

const Name = (props) => {
    return (
        <span className={style.otstp}>
            {props.name}
        </span>

    )
}




export default Name;