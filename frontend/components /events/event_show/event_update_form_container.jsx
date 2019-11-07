import React from 'react' 
import {connect} from 'react-redux' 
import EventUpdateForm from './event_update_form'
import {updateEvent, fetchEvent} from '../../../actions/event_actions'

const msp = (state, ownProps) => { 
    debugger
    return {
        event: state.entities.events[ownProps.match.params.eventId], 
        currentUser: state.session.id 
    }
}

const mdp = dispatch => { 
    return { 
        updateEvent: (event) => dispatch(updateEvent(event)), 
        fetchEvent: (id) => dispatch(fetchEvent(id)) 
    }
}

export default connect(msp, mdp)(EventUpdateForm)