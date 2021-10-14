import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";



const MyPosts = (props) => {

  let mapPostData = props.state.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} > </Post>);

  return (
    <div>my post
      <div>
        <textarea></textarea>
        <button> Добавить пост</button>
      </div> 
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;