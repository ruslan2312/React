import react from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PorfileInfo/ProfileInfo";



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} postUnMessage = {props.state.postUnMessage} dispatch={props.dispatch}></MyPosts>
    </div>
  )
}
export default Profile;