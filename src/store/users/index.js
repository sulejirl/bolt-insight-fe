import {SET_USER_COUNT, SET_USER_LIST} from './actions.type'


const initialState = {
    userCount: 0,
    userList: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_COUNT:
            return {
                ...state,
                userCount: action.payload
            }
        case SET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state
    }
}