import react from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends and name/Friends";
import Name from "./Friends and name/Name";
const Navbar = (props) => {
    let mapImg = props.state.dialogsDatat.map(element => <Friends img={element.img} name={element.name} > </Friends>);
    let mapName = props.state.dialogsDatat.map(element => <Name  name={element.name} > </Name>);

    return (
        <div>
            <nav className={style.nav}>
                
                <div className={`${style.item} ${style.active}`}>< NavLink to="/profile" activeClassName={style.active}> Профиль </NavLink></div>
                <div className={`${style.item} ${style.active}`}>< NavLink to="/messages" activeClassName={style.active}>Сообщения</NavLink></div>
                <div className={`${style.item} ${style.active}`}>< NavLink to="/news" activeClassName={style.active}>Новости</NavLink></div>
                <div className={style.item}><NavLink to="/settings" activeClassName={style.active}>  Настройки </NavLink></div>
                <div className={style.freinds}> Freinds </div>
                
               <div className={style.ff}> {mapImg} </div> 
               <div className={style.ff}> {mapName} </div>



            </nav>

        </div>
    )
}
export default Navbar;