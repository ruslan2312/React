import react from "react";
import style from "./Dialogs.module.css";

const Dialog = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    Pervi
                </div>
                <div className={style.dialog}>
                    Second
                </div>
                <div className={style.dialog}>
                    Three
                </div>
                <div className={style.dialog}>
                    Four
                </div>
                <div className={style.dialog}>

                </div>
            
            
            </div>
            <div className={style.messages}>
                <div className={style.message}> hi </div>
                <div className={style.message}> Adely</div>
                <div className={style.message}> How are you</div>
            </div>

        </div>
    )
}

export default Dialog;