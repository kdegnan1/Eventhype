import React from 'react' 
import {connect} from 'react-redux'
import NavBar from './nav_bar'
import { logoutUser} from '../../actions/session_actions'


const msp = state => ({ 
    currentUser: state.session.currentUser
}); 

const mdp = dispatch => ({ 
    logoutUser: () => dispatch(logoutUser())
});

// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(msp, mdp)(NavBar)
