import React from 'react'
import {connect} from 'react-redux'
import { signupUser } from '../../actions/session_actions'
import SignUp from './signup'

const msp = ({errors}) => { 
    return { 
        errors: errors.session, 
        formType: 'signup', 
        // navLink: <Link to="/login">log in</Link>
    }
}

const mdp = dispatch =>{ 
    return{
        signupUser: user => dispatch(signupUser(user))  
    }
}

export default connect(msp, mdp)(SignUp) 
