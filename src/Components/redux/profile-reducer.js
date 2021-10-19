const ADD_POST_STATE = 'ADD-POST-STATE';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
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