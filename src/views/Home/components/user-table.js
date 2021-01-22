import React, {useEffect, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import {setUserCount, setUserList} from "../../../store/users/actions";
import {connect} from 'react-redux'

const UserTable =({userList}) => {
    const [list,setList] = useState([]);
    useEffect(()=>{
        setList(userList)
    },[userList])
    list && list.length > 0 && list.forEach(item => item.id = item._id)
    console.log(list)
    return(
        <Card style={{height: '500px'}}>
            <CardContent>
                <h2>Users</h2>
                {list && list.length > 0 && (
                    <div style={{height: '400px', width: '100%'}}>
                        <DataGrid pageSize={5} rows={list} columns={[
                            {field: 'id', headerName: 'ID', width: 200},
                            {field: 'email', headerName: 'Email', width: 200},
                            {field: 'firstName', headerName: 'First name', width: 200},
                            {field: 'lastName', headerName: 'Last name', width: 200},
                        ]}/>
                    </div>

                )}
            </CardContent>
        </Card>
    )
}
const mapStateToProps = (state) => ({
    userList: state.users.userList
})
export default connect(mapStateToProps)(UserTable)