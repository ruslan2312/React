import React from "react";
import Post from "./Post/Posts";

const MyPosts = (props) => {
  let mapPostData = props.state.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} > </Post>);

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
        <textarea onChange={onChangeText} ref={NewPost} value={props.state.postUnMessage}></textarea>
        <button onClick={addPost}> Добавить пост</button>
      </div>
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;