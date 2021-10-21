import React from "react";
import {addPostAtionCreator, updateNewPostActionCreatro} from "../../redux/profile-reducer"
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
  
  let NewPost = React.createRef();

  let onAddPost = () => {
    props.dispatch(addPostAtionCreator());
  }
  let onChangeText = (message) => {
    props.dispatch(updateNewPostActionCreatro(message));
  }

  return (
    <MyPosts updateNewPostText={onChangeText} addPost={onAddPost} state={props.state}></MyPosts>

  )
}
export default MyPostsContainer;