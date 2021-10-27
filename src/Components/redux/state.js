import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const ADD_POST_STATE = 'ADD-POST-STATE';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        DialogsPage: {
            dialogsDatat: [
                { id: 1, name: "Frist", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
                { id: 2, name: "Two", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
                { id: 3, name: "Three", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
            ],
            messageData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Adely" },
                { id: 3, message: "How you" },
            ],
            messageUnMessage: ""
        },
        PostPage: {
            postData: [
                { id: 1, message: "Hi message 1", like: "3" },
                { id: 2, message: "Hi message 2", like: "2" }
            ],
            postUnMessage: ""

        },
    },
    getState() {
        return this._state;
    },

    renderThree() {
    },

    subscribe(observer) {
        this.renderThree = observer;
    },


    dispatch(action) {
        this._state.PostPage = profileReducer(this._state.PostPage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this.renderThree(this._state);
    }
}

export default store;