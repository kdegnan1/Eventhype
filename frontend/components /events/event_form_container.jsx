import React from 'react' 
import {connect} from 'react-redux' 
import {fetchEvent, createEvent, updateEvent} from '../../actions/event_actions'
import EventForm from './event_form' 

const msp = ({errors, entities, session}) => { 
    return { 
        // errors: error.session, 
        events: entities.events, 
        currentUser: session.id
    }
}

const mdp = dispatch => { 
    return { 
        createEvent: (event) => dispatch(createEvent(event)), 
        fetchEvent: (id) => dispatch(createEvent(id)), 
        updateEvent: (event) => dispatch(updateEvent(event))
    }
}

export default connect(msp, mdp)(EventForm)