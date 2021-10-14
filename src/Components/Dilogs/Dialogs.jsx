import react from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialog = (props) => {

    let dialogMap = props.state.dialogsDatat.map(element => <DialogItem id={element.id} name={element.name} img={element.img}> </DialogItem>)
    let messageMap = props.state.messageData.map(element => <Message id={element.id} message={element.message}></Message>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogMap}
            </div>
            <div className={style.messages}>
                {messageMap}
            </div>

        </div>
    )
}

export default Dialog;