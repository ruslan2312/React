import React from "react";
import { connect } from "react-redux";
import { addPostAtionCreator, updateNewPostActionCreatro } from "../../redux/profile-reducer"
import MyPosts from "./MyPosts";



let mapDispatchToProps = (dispatch) => {
  
    return {
        updateNewPostText: (message) => {
            dispatch(updateNewPostActionCreatro(message));
        },
        addPost: () => {
            dispatch(addPostAtionCreator());
        }
    }
}
let mapStateToProps = (state) => {
    return {
        PostPage: state.PostPage
}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;