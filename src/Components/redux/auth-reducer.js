const SET_USERS_DATA = 'SET-USERS-DATA'
const AUTH = 'AUTH'

let InstallState = {
    id: null,
    email: null,
    password: null,
    authedUsers: 0,
    userData: [],
}


const authReducer = (state = InstallState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            debugger
            return {

                ...state,
                userData: action.userData,
                id: action.userData.id,
                password: action.userData.password,
                email: action.userData.email,
                authedUsers: action.userData.authStatus
            }
        }
        case AUTH: {
            debugger
            return {
                ...state,
                authedUsers: action.authDateEmail === state.email && action.authDatePassword === state.password ? true : false
            }
        }

        default: return state
    }
}

export const setUserData = (userData) => {
    return {
        type: SET_USERS_DATA, userData
    }
}

export const authDate = (authDateEmail, authDatePassword, authDateId) => {
    return {
        type: AUTH, authDateId, authDateEmail, authDatePassword,
    }
}


export default authReducer;

