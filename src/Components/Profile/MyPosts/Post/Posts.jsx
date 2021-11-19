import React from "react";
import style from "./Post.module.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';



const Post = (props) => {
  return (
    <div className={style.item}>
      <Card sx={{ maxWidth: 400, borderBottom: 1, borderRight: 1, mt: 4 }}  >
        <CardMedia sx={{ borderRadius: '50%' }}
          component="img"
          height="400"
          image={props.imgs}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Post: {props.message}
          </Typography>
          <Typography variant="h5" color="text.secondary" >
            Like {props.like} <Button variant="contained" sx={{ ml: 28 }} size="s"> <ThumbUpAltIcon ></ThumbUpAltIcon> </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>


  )
}
export default Post;