import react from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PorfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer state={props.state} dispatch={props.dispatch}></MyPostsContainer>
    </div>
  )
}
export default Profile;