import react from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (

        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>< NavLink to="/profile" activeClassName={style.active}> Профиль </NavLink></div>
            <div className={`${style.item} ${style.active}`}>< NavLink to="/messages"activeClassName={style.active}>Сообщения</NavLink></div>
            <div className={`${style.item} ${style.active}`}>< NavLink to="/news" activeClassName={style.active}>Новости</NavLink></div>
            <div className={style.item}><NavLink to="/settings" activeClassName = {style.active}>  Настройки </NavLink></div>
        </nav>
    )
}
export default Navbar;