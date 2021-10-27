import react from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends and name/Friends";
import Name from "./Friends and name/Name";
import Navbar from "./Navbar";

import { connect } from "react-redux";


  
let mapStateToProps = (state) => {
    return {
        DialogsPage:state.DialogsPage
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);



export default NavbarContainer;