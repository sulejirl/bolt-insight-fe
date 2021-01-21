import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Grid, TextField} from "@material-ui/core";
import api from "../../../api";
import {setUserCount, setUserList} from "../../../store/users/actions";
import {connect} from 'react-redux'


const UserForm = ({onSetUserCount}) => {
    const [fields, setFields] = useState({})

    const getUserCount = async () => {
        let usersCount = await api.user.getUsersCount();
        onSetUserCount(usersCount.data.count)
    }

    const handleChange = (field, e) => {
        let tempFields = {...fields}
        tempFields[field] = e.target.value
        setFields(tempFields)
    }
    const createUser = async () => {
        let user = await api.user.createUser(fields)
        getUserCount()
    }
    return (
        <Card>
            <CardContent>
                <Grid container item spacing={3}>
                    <Grid item xs={6}><TextField onChange={handleChange.bind(this, 'firstName')} fullWidth
                                                 label='First Name' variant="outlined"/></Grid>
                    <Grid item xs={6}><TextField onChange={handleChange.bind(this, 'lastName')} fullWidth
                                                 label={'Last Name'} variant="outlined"/></Grid>
                    <Grid item xs={12}><TextField onChange={handleChange.bind(this, 'email')} fullWidth
                                                  label='Email' variant="outlined"/></Grid>
                    <Grid item xs={12}> <Button onClick={createUser} variant="contained" color="secondary">Create
                        User</Button>
                    </Grid>

                </Grid>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)