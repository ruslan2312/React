import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pages = [];

    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(i);
    }

    return <div>
        {
            props.users.map(element =>
                <div className={style.profile} key={element.id}>
                    <Card sx={{ maxWidth: 345, border: 2 }}>
                        <NavLink to={"/profile/" + element.id}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={element.img}
                            />
                        </NavLink>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {element.name} {element.surname}
                            </Typography>

                            <Typography variant="body2" >
                                Статус: {element.status}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="inherit" size="small">Написать</Button>
                            <Button color="inherit" size="small">Просмотреть профиль</Button>
                        </CardActions>
                    </Card>
                    <div className={style.follow}>
                        {element.followed ? <Button variant="contained" onClick={() => props.unfollow(element.id)}> Follow </Button>
                            : <Button variant="contained" onClick={() => props.follow(element.id)} > Unfollow </Button>}
                    </div>
                </div>
            )
        }
        {pages.map(element => {
            return <Button variant="contained" sx={{ margin: 1 }} className={props.curentPage === element && style.spanactive}
                onClick={() => { props.onChangePage(element) }}
            > {element}</Button>
        })
        }
    </div >
}

export default Users;

