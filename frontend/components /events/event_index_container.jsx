import React from 'react' 
import EventIndex from './event_index'
import {fetchEvents} from '../../actions/event_actions'
import { connect } from 'react-redux' 

const msp = (state) => { 
    debugger
    return { 
        events: Object.values(state.entities.events),
        currentUser: state.session.id
    }
} 

const mdp = (dispatch) => { 
    return  { 
        fetchEvents: () => dispatch(fetchEvents())
    }
}

export default connect(msp, mdp)(EventIndex) 