import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { addPost, updateNewPost, setProfile } from "../redux/profile-reducer"
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 1;
        }
        axios.get("http://localhost:27017/api/profile/" + userId).then(
            response => {
                this.props.setProfile(response.data)
            })
    }
    
    render() {
        return <Profile {...this.props} profile={this.props.profile}></Profile>
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.PostPage.profile
    }
}

let ProfileContainerUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfile })(ProfileContainerUrl);
