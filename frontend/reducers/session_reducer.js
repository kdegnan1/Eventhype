import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL } from '../actions/session_actions'

const _nullSession = { 
    currentUser: null, 
}

const sessionReducer = (state = _nullSession, action) => { 
    // debugger
    Object.freeze(state) 
    switch(action.type) { 
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, {currentUser: action.userPayload.user}) 
        case RECEIVE_EMAIL: 
        // debugger
            return Object.assign({}, state, {email: action.email})
        case LOGOUT_CURRENT_USER: 
            return _nullSession
        default:
            return state; 
    }
}
export default sessionReducer; 