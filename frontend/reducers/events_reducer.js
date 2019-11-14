import {RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT} from '../actions/event_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {merge} from 'lodash' 

const eventsReducer = (state={}, action) => { 
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
        //debugger
             return Object.assign({}, state, action.userPayload.events) 
        case RECEIVE_EVENT: 
        //debugger
            return Object.assign({}, state,{[action.event.event.id]: action.event.event} )
        case RECEIVE_EVENTS: 
        //debugger
            return action.events 
        case REMOVE_EVENT:
            //debugger
            let newState = merge({}, state);
            delete newState[action.id];
           return newState;
        default: 
            return state 
    }
}

export default eventsReducer; 