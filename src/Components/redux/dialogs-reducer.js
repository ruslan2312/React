
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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