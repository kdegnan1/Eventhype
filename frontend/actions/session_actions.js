import { signup, login, logout } from '../util /session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveSessionErrors = errors => { 
    // debugger
    return ({ 
        type: RECEIVE_SESSION_ERRORS, 
        errors 
    })
} 

const receiveCurrentUser = user => { 
    // debugger
    return ({ 
        type: RECEIVE_CURRENT_USER, 
        user
    });
} 

const logoutCurrentUser = () => { 
    return({ 
        type: LOGOUT_CURRENT_USER
    });
}

export const signupUser = formUser => dispatch => { 
    return signup(formUser).then(user => dispatch(receiveCurrentUser(user)) 
    ); 
}

export const loginUser = formUser => dispatch => {
    return login(formUser).then(user => dispatch(receiveCurrentUser(user))
    ); 
}

export const logoutUser = () => dispatch => { 
    return logout().then( () => dispatch(logoutCurrentUser())
    ); 
}