import react from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreatror, updateNewMessageActionCreatror } from '../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreatror())
        },
        changeMessage: (message) => {
            dispatch(updateNewMessageActionCreatror(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;