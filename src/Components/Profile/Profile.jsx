import react from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";



const Profile = () =>
{
    return(
        <div className={style.content} >
        <div>
          <img src="https://w-dog.ru/wallpapers/12/6/471657930780807/makro-galka-kamni-kamen-kameshki.jpg"></img>
        </div>
        <MyPosts></MyPosts>
      </div>
    )
}
export default Profile;