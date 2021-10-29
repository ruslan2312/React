const ADD_POST_STATE = 'ADD-POST-STATE';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postData: [
        { id: 1, message: "Hi message 1", like: "3" },
        { id: 2, message: "Hi message 2", like: "2" }
    ],
    postUnMessage: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_STATE: {
            let newText = {
                id: 3,
                message: state.postUnMessage,
                like: 0
            }
            return {
                ...state,
                postData: [...state.postData, newText],
                postUnMessage: ""
            }
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                postUnMessage: action.newText
            }
        }
        default:
            return state
    }

}
export const addPostAtionCreator = () => {
    return {
        type: ADD_POST_STATE
    }
}

export const updateNewPostActionCreatro = (text) => {
    return {
        type: UPDATE_NEW_POST, newText: text
    }
}

export default profileReducer