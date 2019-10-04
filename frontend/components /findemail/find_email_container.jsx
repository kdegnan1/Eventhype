import React from 'react'
import {connect} from 'react-redux'
import FindEmail from './find_email' 
import {findUser} from '../../actions/session_actions'
// import finduser from '../../util /session_api_util'

const mdp = dispatch => ({ 
    // finduser: (email) => finduser(email)
    findUser: (email) => dispatch(findUser(email))
}); 

export default connect(null, mdp)(FindEmail)