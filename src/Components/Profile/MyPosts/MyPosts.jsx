import react from "react";
import style from "./MyPosts.module.css";



const MyPosts = () => {
  return (
    <div>my post
      <div> New Post</div>
      <div className={style.item}> post1</div>
      <div> post2</div>
    </div>

  )
}
export default MyPosts;