import React from 'react.jsx' 
import {connect} from 'react-redux' 
import EventUpdateForm from './event_update_form'
import {updateEvent} from '../../../actions/event_actions'

const msp = (state, ownProps) => { 
    return {
        event: state.entities.events[ownProps.match.params.id], 
        currentUser: state.session.id 
    }
}

const mdp = dispatch => { 
    return { 
        updateEvent: (event) => dispatch(updateEvent(event)) 
    }
}

export default connect(msp, mdp)(EventUpdateForm)