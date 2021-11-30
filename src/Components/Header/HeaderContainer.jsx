import React from "react";
import { connect } from "react-redux";
import { openActionCreator, closeActionCreator } from "../redux/header-reducer";
import Header from "./Header"


let mapStateToProps = (state) => {
    return {
        drawerStatus: state.HeaderPage.drawerStatus,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        open: (drawer) => {
            dispatch(openActionCreator(drawer))
        },
        close: (drawer) => {
            dispatch(closeActionCreator(drawer))
        },
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);