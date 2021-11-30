import react from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends and name/Friends";
import Name from "./Friends and name/Name";
import logo from '../../images/twitter.png'

const Navbar = (props) => {
    let mapImg = props.DialogsPage.dialogsDatat.map(element => <Friends img={element.img} name={element.name} key={element.id} > </Friends>);
    let mapName = props.DialogsPage.dialogsDatat.map(element => <Name name={element.name} key={element.id} > </Name>);

    return (
        <div>
            {
                <nav className={style.nav}>
                    {/* <div className={`${style.item} ${style.active}`}>< NavLink to="/profile" activeClassName={style.active}> Профиль </NavLink></div>
                    <div className={`${style.item} ${style.active}`}>< NavLink to="/messages" activeClassName={style.active}>Сообщения</NavLink></div>
                    <div className={`${style.item} ${style.active}`}>< NavLink to="/news" activeClassName={style.active}>Новости</NavLink></div>
                    <div className={style.item}><NavLink to="/settings" activeClassName={style.active}>  Настройки </NavLink></div>
                    <div className={`${style.item} ${style.active}`}>< NavLink to="/users" activeClassName={style.active}>Пользователи</NavLink></div>
                    <div className={style.freinds}> Freinds </div>
                    <div className={style.ff}> {mapImg} </div>
                    <div className={style.ff}> {mapName} </div> */}

                    <img className={style.logo} src={logo} />
                </nav>
            }
        </div>
    )
}
export default Navbar;