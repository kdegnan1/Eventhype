import React from 'react' 
import {connect} from 'react-redux' 
import EventShow from './event_show'
import {fetchEvent, deleteEvent, updateEvent, createRegistration, deleteRegistration, createLike, deleteLike} from '../../../actions/event_actions' 

const msp = (state, ownProps) => { 
    debugger 
    return { 

        event: state.entities.events[ownProps.match.params.id], 
        currentUser: state.session.currentUser 
    }
}

const mdp = dispatch => { 
    return { 
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        deleteEvent: (id) => dispatch(deleteEvent(id)),
        updateEvent: (id) => dispatch(updateEvent(id)),
        createRegistration: (event_id) => dispatch(createRegistration(event_id)), 
        // deleteRegistration: (event_id, registration_id) => dispatch(deleteRegistration(event_id, user_id)) 
        deleteRegistration: (event_id) => dispatch(deleteRegistration(event_id)), 
        createLike: (event_id) => dispatch(createLike(event_id)), 
        deleteLike: (event_id) => dispatch(deleteLike(event_id)) 
    }
}

export default connect(msp, mdp)(EventShow) 