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
    debugger
    switch (action.type) {
        case ADD_POST_STATE:
            let newPost = {
                id: 1,
                message: state.postUnMessage,
                like: 0
            }
            state.postData.push(newPost);
            state.postUnMessage = "";
            return state

        case UPDATE_NEW_POST:
            state.postUnMessage = action.newText;
            return state

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