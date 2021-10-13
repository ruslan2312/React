import react from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Posts";


const MyPosts = () => {
  return (
    <div>my post
      <div>
        <textarea></textarea>
        <button> Добавить пост</button>
      </div>
      <div> New Post</div>
      <Post message = "Hi message 1" like = "3"/>
      <Post message = "Hi message How you 2" like = "5"/>
    </div>
  )
}
export default MyPosts;