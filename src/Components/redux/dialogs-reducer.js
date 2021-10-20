const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE';


let installState = {
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
}

const dialogsReducer = (state = installState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.messageUnMessage = action.newMessage;
            return state

        case SEND_MESSAGE:
            state.messageData.push({ id: '5', message: state.messageUnMessage })
            state.messageUnMessage = "";
            return state

        default:
            return state
    }
}

export const updateNewMessageActionCreatror = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE, newMessage: message
    }
}
export const sendMessageActionCreatror = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;