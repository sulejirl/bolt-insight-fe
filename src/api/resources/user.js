import {HTTP} from '../http'

export default {
    createUser: (data) => HTTP.post('/user',data),
    getAllUsers: () => HTTP.get('/user'),
    getUsersCount: () => HTTP.get('/user/count'),

}
