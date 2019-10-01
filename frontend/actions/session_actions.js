import { signup, login, logout } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveSessionErrors = errors => { 
    return ({ 
        type: RECEIVE_SESSION_ERRORS, 
        errors 
    })
} 

const receiveCurrentUser = CurrentUser => { 
    return ({ 
        type: RECEIVE_CURRENT_USER, 
        currentUser 
    });
} 

const logoutCurrentUser = () => { 
    return({ 
        type: LOGOUT_CURRENT_USER
    });
}

export const signupUser = formUser => dispatch => { 
    signup(formUser).then(user => dispatchEvent(receiveCurrentUser(user)) 
    ); 
}

export const loginUser = formUser => dispatch => {
    login(formUser).then(user => dispatch(receiveCurrentUser(user))
    ); 
}

export const logoutUser = () => dispatch => { 
    logout().then( () => dispatch(logoutCurrentUser())
    ); 
}