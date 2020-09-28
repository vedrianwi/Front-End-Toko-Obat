import { LOGIN, LOGOUT, REGISTER, USER_HISTORY } from '../actions/helper'

const INITIAL_STATE = {
    username : "",
    email : "",
    role : "",
    id : null,
    register_status : false,
    userHistory : []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN : 
            return {
                ...state,
                username : action.payload.username,
                email : action.payload.email,
                role : action.payload.role,
                id : action.payload.id
                }
        case LOGOUT :
            return INITIAL_STATE
        case REGISTER : 
            return { ...state, register_status : true }
        case USER_HISTORY :
            return {...state, userHistory : action.payload}
        default :
            return state
    }
}

export default userReducer