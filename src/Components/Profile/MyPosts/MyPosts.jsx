import React from "react";
import Post from "./Post/Posts";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MyPosts = (props) => {

  let mapPostData = props.PostPage.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} key={element.id} imgs={props.img}> </Post>);

  let NewPost = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onChangeText = () => {
    let message = NewPost.current.value;
    props.updateNewPostText(message)
  }

  return (

    <div>my post
      <div>
        <textarea onChange={onChangeText} ref={NewPost} value={props.PostPage.postUnMessage}></textarea>
        <Button onClick={addPost} variant="contained"> Добавить пост</Button>
      </div>
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;