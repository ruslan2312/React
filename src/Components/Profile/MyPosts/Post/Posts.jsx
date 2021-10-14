import React from "react";
import style from "./Post.module.css";



const Post = (props) => {
  return (

    <div className={style.item}>
      <img src="https://sun9-63.userapi.com/impg/e9zgAT71TEYCS27p1DEHmS0LqV2JtU9X0B5a5w/TJ0MN5R7snk.jpg?size=720x1355&quality=96&sign=b7cfcdba19af5b5bca893176d8563b8f&type=album" />

      <div>
        <span > Like {props.like}   {props.message}
        </span>
      </div>
    </div>


  )
}
export default Post;