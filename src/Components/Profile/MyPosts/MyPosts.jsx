import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";
import {addPostAtionCreator, updateNewPostActionCreatro} from "../../redux/state"




const MyPosts = (props) => {

  let mapPostData = props.state.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} > </Post>);

  let NewPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAtionCreator());
  }

  let onChangeText = () => {
    let text = NewPost.current.value;
    props.dispatch(updateNewPostActionCreatro(text));
  }

  return (

    <div>my post
      <div>
        <textarea onChange={onChangeText} ref={NewPost} value={props.postUnMessage}></textarea>
        <button onClick={addPost}> Добавить пост</button>
      </div>
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;