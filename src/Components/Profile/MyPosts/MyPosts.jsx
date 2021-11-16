import React from "react";
import Post from "./Post/Posts";

const MyPosts = (props) => {

  let mapPostData = props.PostPage.postData.map(element => <Post id={element.id} message={element.message} like={element.like} img={element.img} key={element.id} > </Post>);

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
        <button onClick={addPost}> Добавить пост</button>
      </div>
      <div> New Post</div>
      {mapPostData}
    </div>
  )
}
export default MyPosts;