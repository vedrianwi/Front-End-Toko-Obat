import { GET_PROFILE, LOGOUT, EDIT_PROFILE } from '../actions'

const INITIAL_STATE = {
    image: '',
    address: '',
    gender: '',
    phone: ''
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                image: action.payload[0].image,
                address: action.payload[0].address,
                gender: action.payload[0].gender,
                phone: action.payload[0].phone
            }
        case EDIT_PROFILE:
            return { ...state, profile: action.payload }

        case LOGOUT:
            return INITIAL_STATE
        default:
            return state
    }
}

export default profileReducer