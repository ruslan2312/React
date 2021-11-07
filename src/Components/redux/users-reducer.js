const UNFOLLOW_ACTION_CREATOR = 'UNFOLLOW-ACTION-TOSTATE'
const FOLLOW_ACTION_CREATOR = 'FOLLOW-ACTION-TOSTATE'
const SET_USERS = 'SET-USERS'

let InstallState = {
    users: [  ]
}

const usersReducer = (state = InstallState, action) => {
    switch (action.type) {
        case FOLLOW_ACTION_CREATOR: {
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userId) {
                        return { ...element, followed: true }
                    }
                    return element;
                })
            }
        }
        case UNFOLLOW_ACTION_CREATOR: {
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userId) {
                        return { ...element, followed: false }
                    }
                    return element;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW_ACTION_CREATOR, userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW_ACTION_CREATOR, userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;