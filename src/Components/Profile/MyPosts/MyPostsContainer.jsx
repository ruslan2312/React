import React from "react";
import ContextComponent from "../../../Context";
import { addPostAtionCreator, updateNewPostActionCreatro } from "../../redux/profile-reducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  return <ContextComponent>{
    (store) => {

      let state = store.getState();

      let onAddPost = () => {
        store.dispatch(addPostAtionCreator());
      }
      
      let onChangeText = (message) => {
        store.dispatch(updateNewPostActionCreatro(message));
      }

      return (<MyPosts updateNewPostText={onChangeText} addPost={onAddPost} state={state.PostPage}></MyPosts>)
    }
  }
  </ContextComponent>

}
export default MyPostsContainer;