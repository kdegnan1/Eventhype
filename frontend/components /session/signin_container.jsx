import {connect} from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom';
import {loginUser} from '../../actions/session_actions'; 
import Signin from './signin' 

const msp = ({errors}) => { 
    return { 
        errors: errors.session, 
        formType: 'login', 
        // navLink: <Link to="/signup">sign up instead</Link>
    }
}

const mdp = dispatch => { 
    return { 
        loginUser: formUser => dispatch(loginUser(formUser)) 
    }
}

export default connect(msp, mdp)(Signin) 