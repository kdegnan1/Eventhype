import {RECEIVE_EVENT, RECEIVE_EVENTS} from '../actions/event_actions'

const eventsReducer = (state={}, action) => { 
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_EVENT: 
        // debugger
            return Object.assign({}, state,{[action.event.event.id]: action.event.event} )
        case RECEIVE_EVENTS: 
        // debugger
            return action.events 
        default: 
            return state 
    }
}

export default eventsReducer; 