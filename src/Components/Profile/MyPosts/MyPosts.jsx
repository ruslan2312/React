import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";


const MyPosts = (props) => {

  let mapPostData = props.state.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} > </Post>);

  let NewPost = React.createRef();

  let addPost = () => {
    debugger;
    let text = NewPost.current.value;
    props.addPostState(text);
    NewPost.current.value ="";
  }


  return (
  
    <div>my post
      <div>
        <textarea ref={NewPost}></textarea>
        <button onClick={addPost}> Добавить пост</button>
      </div> 
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;