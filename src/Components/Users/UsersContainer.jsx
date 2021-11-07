import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setUsersAC, unfollowActionCreator } from "../redux/users-reducer";
import Users from "./Users";




let mapStateToProps = (state) => {
    return { users: state.UsersPage.users }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followActionCreator(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowActionCreator(usersId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);