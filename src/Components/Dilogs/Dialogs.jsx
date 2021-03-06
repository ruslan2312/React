import react from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogMap = props.DialogsPage.dialogsDatat.map(element => <DialogItem id={element.id} name={element.name} img={element.img} key={element.id}> </DialogItem>)
    let messageMap = props.DialogsPage.messageData.map(element => <Message id={element.id} message={element.message} key={element.id} ></Message >)

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