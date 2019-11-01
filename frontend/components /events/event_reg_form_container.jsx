import React from 'react' 
import {connect} from 'react-redux' 
import { fetchEvents } from '../../actions/event_actions'
import { fetchUser } from '../../actions/session_actions'
import EventReg from './event_reg_form'

const msp = (state) => { 
    debugger
    return { 
        events: Object.values(state.entities.events),
        currentUser: state.session.currentUser 
    }
}

const mdp = dispatch => { 
    return { 
        fetchUser: (id) => dispatch(fetchUser(id)), 
        fetchEvents: () => dispatch(fetchEvents()) 
    }
}

export default connect(msp, mdp)(EventReg)