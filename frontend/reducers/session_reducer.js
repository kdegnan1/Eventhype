import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const sessionReducer = (state = {iD: null}, action) => { 
    Object.freeze(state) 
    switch(action.type) { 
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, {iD: action.user.id})
        case LOGOUT_CURRENT_USER: 
            return {iD: null}
        default:
            return state; 
    }

}
export default sessionReducer; 