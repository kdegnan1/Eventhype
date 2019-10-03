import {connect} from 'react-redux'; 
import React from 'react'; 
import {logoutUser} from '../../actions/session_actions'; 
import Dropdown from './dropdown' 

const mdp = dispatch => { 
    return { 
        logoutUser: formUser => dispatch(logoutUser(formUser))
    }
}

export default connect(null, mdp)(Dropdown); 