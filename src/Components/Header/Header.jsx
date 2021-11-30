import react from "react";
import style from "./Header.module.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import AccessibleIcon from '@mui/icons-material/Accessible';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import logo from '../../images/twitter.png'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (<div className={style.header} >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => props.open(true)}
                    >
                        <MenuIcon onClick={() => props.open(true)} >
                        </MenuIcon>
                    </IconButton>
                    <Drawer open={props.drawerStatus}
                        onBackdropClick={() => props.open(false)}
                    >
                        <div className={style.logo}> <img className={style.logo} src={logo} /></div>
                        <div className={`${style.item} ${style.active}`}>  < NavLink to="/profile" activeClassName={style.active}>  <MenuItem style={{ fontSize: '20px' }}><PersonIcon /> <div style={{ marginLeft: '20px' }}>  Профиль </div>  </MenuItem></NavLink></div>
                        <div className={`${style.item} ${style.active}`}>  < NavLink to="/messages" activeClassName={style.active}>  <MenuItem style={{ fontSize: '20px' }}><MessageIcon /> <div style={{ marginLeft: '20px' }}>  Сообщения </div>  </MenuItem></NavLink></div>
                        <div className={`${style.item} ${style.active}`}>  < NavLink to="/news" activeClassName={style.active}>  <MenuItem style={{ fontSize: '20px' }}><FeedIcon /> <div style={{ marginLeft: '20px' }}>  Новости </div>  </MenuItem></NavLink></div>
                        <div className={`${style.item} ${style.active}`}>  < NavLink to="/settings" activeClassName={style.active}>  <MenuItem style={{ fontSize: '20px' }}><SettingsIcon /> <div style={{ marginLeft: '20px' }}>  Настройки </div>  </MenuItem></NavLink></div>
                        <div className={`${style.item} ${style.active}`}>  < NavLink to="/users" activeClassName={style.active}>  <MenuItem style={{ fontSize: '20px' }}><AccessibleIcon /> <div style={{ marginLeft: '20px' }}>  Пользователи </div>  </MenuItem></NavLink></div>
                        <Button variant="contained" onClick={() => props.close(false)} sx={{ m: 5 }}>На Главную</Button>

                    </Drawer>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ReactAppContent
                    </Typography>
                    {props.authStatus}
                    <div className={`${style.eee} ${style.active}`}> <NavLink to="/login" className={style.eee} activeClassName={style.active}> <Button color="inherit"> Login</Button></NavLink> </div>
                </Toolbar>
            </AppBar>
        </Box>
    </div >
    );
}

export default Header