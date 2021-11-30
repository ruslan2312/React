import React from "react";
import style from "../Profile.module.css"
import Box from '@mui/material/Box';

const ProfileInfo = (props) => {
    return (
        <div>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <img className={style.img} src={props.img}></img>
                <h1>  </h1>
                <h2 className={style.status} >  Статус: {props.status}</h2>
            </Box>
        </div>
    )
}

export default ProfileInfo;