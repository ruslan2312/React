const ADD_POST_STATE = 'ADD-POST-STATE';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = "SET_PROFILE"

let initialState = {
    postData: [

    ],
    postUnMessage: "",
    profile: []
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
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }

}
export const addPost = () => {
    return {
        type: ADD_POST_STATE
    }
}

export const updateNewPost = (text) => {
    return {
        type: UPDATE_NEW_POST, newText: text
    }
}
export const setProfile = (profiles) => {
    return {
        type: SET_PROFILE, profile: profiles
    }
}

export default profileReducer