import {SET_USER_COUNT,SET_USER_LIST} from './actions.type'

export const setUserCount = (payload) => {
    return {type: SET_USER_COUNT, payload}
}
export const setUserList = (payload) => {
    return {type: SET_USER_LIST, payload}
}