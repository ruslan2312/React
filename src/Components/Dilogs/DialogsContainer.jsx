import react from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreatror, updateNewMessageActionCreatror } from '../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import ContextComponent from "../../Context";

const DialogsContainer = (props) => {
    return <ContextComponent>{
        (store) => {

            let state = store.getState();

            let onSendMessage = () => {
                store.dispatch(sendMessageActionCreatror())
            }

            let onChangeMessage = (message) => {
                store.dispatch(updateNewMessageActionCreatror(message));
            }

            return (<Dialogs sendMessage={onSendMessage} changeMessage={onChangeMessage} state={state.DialogsPage}></Dialogs>
            )
        }
    }
    </ContextComponent>

}

export default DialogsContainer;