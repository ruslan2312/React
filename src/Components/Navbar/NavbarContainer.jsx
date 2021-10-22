import react from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends and name/Friends";
import Name from "./Friends and name/Name";
import Navbar from "./Navbar";
import ContextComponent from "../../Context";
const NavbarContainer = (props) => {

    return <ContextComponent>{
        (store) => {
            let state = store.getState();
            return (
                <Navbar state={state.DialogsPage}></Navbar>
            )
        }
    }
    </ContextComponent>
}



export default NavbarContainer;