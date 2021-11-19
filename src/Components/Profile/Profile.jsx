import react from "react";
import style from "./Profile.module.css";
import Preloader from "../Preloader/Preloader";
import ProfileInfo from "./PorfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    if (!props.profile.img) {
        return <Preloader></Preloader>
    }
    else {
        debugger
        return (
            <div>  <h3 >{props.profile.name} <br/>  Возраст : {props.profile.age}  </h3>
                <ProfileInfo img={props.profile.img} status={props.profile.status} />
                <MyPostsContainer img={props.profile.img} ></MyPostsContainer>
            </div>
        )
    }
}
export default Profile;