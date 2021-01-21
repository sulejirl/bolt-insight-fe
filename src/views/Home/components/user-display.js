import React, {useEffect, useState} from 'react'
import {Button, Card, CardContent} from "@material-ui/core";
import api from "../../../api";
import {setUserCount, setUserList} from "../../../store/users/actions";
import {connect} from 'react-redux'


const UserDisplay = ({userCount,onSetUserList,onSetUserCount}) => {
    const [allUsers, setAllUsers] = useState(0)

    useEffect(() => {
        getUserCount()
    }, [])
    const getUserCount = async () => {
        let usersCount = await api.user.getUsersCount();
        onSetUserCount(usersCount.data.count)
    }
    const handleClickGetAllUsers = async () => {
        let users = await api.user.getAllUsers()
        onSetUserList(users.data);
        onSetUserCount(users.data.length);
    }
    return(
        <Card style={{backgroundColor: '#ffbffe'}}>
            <CardContent>
                <h2>Users Created</h2>
                <h1>{userCount}</h1>
                <div><Button variant="contained" color="primary" onClick={handleClickGetAllUsers}>
                    Get All Users
                </Button></div>

            </CardContent>
        </Card>
    )
}
const mapStateToProps = (state) => ({
    userCount: state.users.userCount,
    userList: state.users.userList
})
const mapDispatchToProps = (dispatch) => ({
    onSetUserCount: (data) => dispatch(setUserCount(data)),
    onSetUserList: (data) => dispatch(setUserList(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay)