import React from "react";
import { connect } from "react-redux";

import { addPostAtionCreator, updateNewPostActionCreatro } from "../../redux/profile-reducer"
import MyPosts from "./MyPosts";



let mapDispatchToProps = (state) => {
    return {
            PostPage: state.PostPage
    }
}
let mapStateToProps = (dispatch) => {
    return {
        updateNewPostText: (message) => {
            dispatch(updateNewPostActionCreatro(message));
        },
        addPost: () => {
            dispatch(addPostAtionCreator());
        }
    }
}
const MyPostsContainer = connect(mapDispatchToProps, mapStateToProps)(MyPosts);
export default MyPostsContainer;