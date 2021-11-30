import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { setUserData, authDate } from "../redux/auth-reducer";
import axios from "axios";

class LoginConatainer extends React.Component {

    componentDidMount() {

        axios.get("http://localhost:27017/api/auth", {
            withCredentials: true
        }).then(
            response => {
                this.props.setUserData(response.data)
            })
    }


    render() {
        return <Login {...this.props}> </Login>
    }


}

let mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps, { setUserData, authDate })(LoginConatainer);



