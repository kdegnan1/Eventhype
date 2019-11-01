import { signup, login, logout, finduser, fetchuser } from '../util /session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL'

const receiveSessionErrors = errors => { 
    // debugger
    return ({ 
        type: RECEIVE_SESSION_ERRORS, 
        errors 
    })
} 

const receiveCurrentUser = userPayload => { 
    debugger
    return ({ 
        type: RECEIVE_CURRENT_USER, 
        userPayload 
    });
} 


const logoutCurrentUser = () => { 
    return({ 
        type: LOGOUT_CURRENT_USER
    });
}

const receiveEmail = (email) => { 
    debugger
    return({ 
        type: RECEIVE_EMAIL, 
        email
    })
}

export const fetchUser = id => dispatch => { 
    debugger
    return fetchuser(id).then(user => dispatch(receiveCurrentUser(user)))
}

export const signupUser = formUser => dispatch => { 
    return signup(formUser).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON))
    ); 
}

export const loginUser = formUser => dispatch => {
    return login(formUser).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON))
    ); 
}

export const logoutUser = () => dispatch => { 
    return logout().then(() => dispatch(logoutCurrentUser()), err => dispatch(receiveSessionErrors(err.responseJSON))
    ); 
}

export const findUser = (email) => dispatch => { 
    return finduser(email).then((emailFound) => {
       return dispatch(receiveEmail(emailFound))
    }); 
 }