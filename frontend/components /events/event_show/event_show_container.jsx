import React from 'react' 
import {connect} from 'react-redux' 
import EventShow from './event_show'
import {fetchEvent, deleteEvent} from '../../../actions/event_actions' 

const msp = (state, ownProps) => { 
    // debugger
    return { 
        event: state.entities.events[ownProps.match.params.id], 
        currentUser: state.session.id 
    }
}

const mdp = dispatch => { 
    return { 
        fetchEvent: (id) => dispatch(fetchEvent(id)),
        deleteEvent: (id) => dispatch(deleteEvent(id))
    }
}

export default connect(msp, mdp)(EventShow) 