import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurentPage, setTotalPages, setIsFetching } from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader"
import * as axios from "axios";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`http://localhost:27017/api/users?limit=${this.props.pageSize}&skip=${(this.props.curentPage - 1) * this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data);
        })
        axios.get("http://localhost:27017/api/users").then(
            response => {
                this.props.setIsFetching(false)
                this.props.setTotalPages(Math.ceil(response.data.length / 2))
            })
    }

    onChangePage = (pageNumber) => {
        this.props.setCurentPage(pageNumber)
        this.props.setIsFetching(true)

        axios.get(`http://localhost:27017/api/users?limit=${this.props.pageSize}&skip=${(pageNumber - 1) * this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data);
            this.props.setIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader></Preloader> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                curentPage={this.props.curentPage}
                totalPages={this.props.totalPages}
                onChangePage={this.onChangePage}
            ></Users>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        curentPage: state.UsersPage.curentPage,
        totalPages: state.UsersPage.totalPages,
        isFetching: state.UsersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (usersId) => {
//             dispatch(followActionCreator(usersId))
//         },
//         unfollow: (usersId) => {
//             dispatch(unfollowActionCreator(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurentPage: (pageNumber) => {
//             dispatch(setCurentPageActionCreator(pageNumber))
//         },
//         setTotalPages: (totalPages) => {
//             dispatch(setTotalPageActionCreator(totalPages))
//         },
//         setIsFetching: (fetching) => {
//             dispatch(setIsFetchingActionCreator(fetching))
//         }

//     }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurentPage, setTotalPages, setIsFetching})(UsersContainer);