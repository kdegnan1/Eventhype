import React from 'react' 
import {connect} from 'react-redux' 
import { fetchEvent } from '../../actions/event_actions'
import EventReg from './event_reg_form'

const msp = (state, ownProps) => { 
    return { 
        event: state.entities.events[ownProps.match.params.id], 
        currentUser: state.session.currentUser 
    }
}

const mdp = dispatch => { 
    return { 
        fetchEvent: (id) => dispatch(fetchEvent(id))
    }
}

export default connect(msp, mdp)(EventReg)