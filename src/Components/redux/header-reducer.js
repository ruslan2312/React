const CLOSE_ACTION_CREATOR = 'CLOSE-ACTION-TOSTATE'
const OPEN_ACTION_CREATOR = 'OPEN-ACTION-TOSTATE'

let InstallState = {
    drawerStatus: false,
};

const headerRuducer = (state = InstallState, action) => {
    switch (action.type) {
        case OPEN_ACTION_CREATOR: {
            return {
                ...state,
                drawerStatus: action.drawer
            }
        }
        case CLOSE_ACTION_CREATOR: {
            return {
                ...state,
                drawerStatus: action.drawer
            }

        }
        default: return { ...state }

    }
}

export const openActionCreator = (drawer) => {
    return {
        type: OPEN_ACTION_CREATOR, drawer
    }
}
export const closeActionCreator = (drawer) => {
    return {
        type: CLOSE_ACTION_CREATOR, drawer
    }
}

export default headerRuducer;

