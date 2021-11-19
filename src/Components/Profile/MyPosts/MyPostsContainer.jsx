import React from "react";
import { connect } from "react-redux";
import { addPost, updateNewPost } from "../../redux/profile-reducer"
import MyPosts from "./MyPosts";



let mapDispatchToProps = (dispatch) => {

    return {
        updateNewPostText: (message) => {
            dispatch(updateNewPost(message));
        },
        addPost: () => {
            dispatch(addPost());
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