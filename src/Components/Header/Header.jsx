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
                    >
                        <MenuIcon onClick={() => props.open(true)} >
                        </MenuIcon>
                        <Drawer open={props.drawerStatus}>
                            <div className={style.logo}> <img className={style.logo} src="https://avatars.mds.yandex.net/i?id=bff0a2ed855bdaa1c71cc04b7dc398f1-4219759-images-thumbs&n=13" /></div>
                            <MenuItem> <div className={`${style.item} ${style.active}`}> <PersonIcon /> < NavLink to="/profile" activeClassName={style.active}> Профиль </NavLink> </div> </MenuItem>
                            <MenuItem> <div className={`${style.item} ${style.active}`}> <MessageIcon />< NavLink to="/messages" activeClassName={style.active}>Сообщения</NavLink></div> </MenuItem>
                            <MenuItem> <div className={`${style.item} ${style.active}`}> <FeedIcon /> < NavLink to="/news" activeClassName={style.active}>Новости</NavLink></div> </MenuItem>
                            <MenuItem> <div className={`${style.item} ${style.active}`}> <SettingsIcon /><NavLink to="/settings" activeClassName={style.active}>  Настройки </NavLink></div>                          </MenuItem>
                            <MenuItem> <div className={`${style.item} ${style.active}`}> <AccessibleIcon /> < NavLink to="/users" activeClassName={style.active}>Пользователи</NavLink></div> </MenuItem>
                            <Button variant="contained" onClick={() => props.close(false)} sx={{ m: 5 }}>На Главную</Button>
                        </Drawer>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ReactAppContent
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div >
    );
}

export default Header