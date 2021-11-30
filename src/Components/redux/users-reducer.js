const UNFOLLOW_ACTION_CREATOR = 'UNFOLLOW-ACTION-TOSTATE'
const FOLLOW_ACTION_CREATOR = 'FOLLOW-ACTION-TOSTATE'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_PAGE = "SET-TOTAL-PAGE"
const IS_FETCHING = "IS-FETCHING"

let InstallState = {
    users: [],
    pageSize: 2,
    totalUserCount: 5,
    curentPage: 1,
    totalPages: 2,
    isFetching: false
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                curentPage: action.curentPage
            }
        }
        case SET_TOTAL_PAGE: {
            return {
                ...state, totalPages: action.totalPages
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case IS_FETCHING: {
            return { ...state, isFetching: action.fetching }
        }
        default: return state
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW_ACTION_CREATOR, userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW_ACTION_CREATOR, userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}

export const setCurentPage = (curentPage) => {
    return {
        type: SET_CURRENT_PAGE, curentPage
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGE, totalPages
    }
}

export const setIsFetching = (fetching) => {
    return {
        type: IS_FETCHING, fetching
    }
}

export default usersReducer;

