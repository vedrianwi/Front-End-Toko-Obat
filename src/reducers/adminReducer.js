import { GET_HISTORY, GET_STOCK, HISTORY_RACIK } from '../actions'

const INITIAL_STATE = {
    trans_history: [],
    stock : [],
    historyRacik : []
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return { ...state,trans_history: action.payload }
        case GET_STOCK:
            return { ...state,stock: action.payload }
        case HISTORY_RACIK: 
            return {...state, historyRacik : action.payload}
        default:
            return state
    }
}

export default adminReducer