import react from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (

        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}><a> Профиль </a></div>
            <div className={`${style.item} ${style.active}`}><a>Сообщения</a></div>
            <div className={`${style.item} ${style.active}`}><a>Новости</a></div>
            <div className={style.item}><a> Настройки </a></div>
        </nav>
    )
}
export default Navbar;