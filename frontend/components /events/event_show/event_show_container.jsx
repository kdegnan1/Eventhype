import React from 'react' 
import {connect} from 'react-redux' 
import EventShow from './event_show'
import {fetchEvent} from '../../../actions/event_actions' 

const msp = (state, ownProps) => { 
    // debugger
    return { 
        event: state.entities.events[ownProps.match.params.id], 
        currentUser: state.session.id 
    }
}

const mdp = dispatch => { 
    return { 
        fetchEvent: (id) => dispatch(fetchEvent(id)) 
    }
}

export default connect(msp, mdp)(EventShow) 