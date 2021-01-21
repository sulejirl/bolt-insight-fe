import React, {useState, useEffect} from 'react';
import {Container, Grid, Card, CardContent, TextField, Button} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';
import UserForm from './components/user-form';
import UserDisplay from './components/user-display'
import UserTable from './components/user-table'
import {connect} from 'react-redux'
import {setUserCount, setUserList} from '../../store/users/actions'
import api from '../../api';

const Home = () => {
    return (
        <Container maxWidth={'xl'}>
            <Grid container justify={"space-between"} spacing={10}>
                <Grid item xs={12} style={{height: '20vh', backgroundColor: '#d7ae7b'}}>
                    <h2>React,Node,Mongo,AWS</h2>
                </Grid>
                <Grid container item spacing={3} justify={"space-evenly"}>
                    <Grid item xs={5}>
                        <UserForm/>
                    </Grid>
                    <Grid item xs={5}>
                        <UserDisplay/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <UserTable/>
                </Grid>
            </Grid>
        </Container>)
}
const mapStateToProps = (state) => ({
    userCount: state.users.userCount,
    userList: state.users.userList
})
const mapDispatchToProps = (dispatch) => ({
    onSetUserCount: (data) => dispatch(setUserCount(data)),
    onSetUserList: (data) => dispatch(setUserList(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
