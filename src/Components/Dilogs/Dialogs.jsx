import react from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreatror, updateNewMessageActionCreatror } from '../redux/dialogs-reducer'



const Dialogs = (props) => {
    
    let dialogMap = props.DialogsPage.dialogsDatat.map(element => <DialogItem id={element.id} name={element.name} img={element.img}> </DialogItem>)
    let messageMap = props.DialogsPage.messageData.map(element => <Message id={element.id} message={element.message} ></Message >)

    let NewM = react.createRef();


    const sendMessage = () => {
        props.sendMessage();
    }

    const onChageMessage = () => {
        let message = NewM.current.value;
        props.changeMessage(message);
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogMap}
            </div>


            <div className={style.messages}>
                {messageMap} <div><textarea onChange={onChageMessage} ref={NewM} value={props.DialogsPage.messageUnMessage}>  </textarea>
                    <button onClick={sendMessage}> sadasd</button> </div>
            </div>

        </div>
    )
}

export default Dialogs;