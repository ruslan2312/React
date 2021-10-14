import React from "react";
import style from "./Friends.module.css";

const Friends = (props) => {
    return (
        <span>
           
            <span>
                <img className={style.img} src={props.img} />  
            </span>
            
        </span>

    )
}




export default Friends;