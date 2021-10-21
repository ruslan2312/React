import react from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreatror, updateNewMessageActionCreatror } from '../redux/dialogs-reducer'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {


    const onSendMessage = () => {
        props.dispatch(sendMessageActionCreatror())
    }

    const onChangeMessage = (message) => {
        props.dispatch(updateNewMessageActionCreatror(message));
    }


    return ( <Dialogs sendMessage={onSendMessage} changeMessage={onChangeMessage} state={props.state}></Dialogs>
    )
}

export default DialogsContainer;