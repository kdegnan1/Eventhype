import * as ApiEventsUtil from '../util /event_api_utl'

export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

const receiveEvent = (event) => { 
    debugger
    return ({
        type: RECEIVE_EVENT, 
        event
    })
}

const receiveEvents = (events) => {
    return ({
        type: RECEIVE_EVENTS,
        events 
    })
}

export const fetchEvent = (id) => dispatch => { 
    return ApiEventsUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
}

export const fetchEvents = () => dispatch => { 
    return ApiEventsUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
}

export const createEvent = (formData) => dispatch => { 
    return ApiEventsUtil.createEvent(formData).then(event => dispatch(receiveEvent(event)))
}

export const updateEvent = (event) => dispatch => { 
    return ApiEventsUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = (id) => dispatch => { 
    return ApiEventsUtil.deleteEvent(id).then(event => dispatch(receiveEvents(event)))
}

export const createRegistration = (event_id) => dispatch => { 
    debugger
    return ApiEventsUtil.createRegistration(event_id).then(
        event => { 
            debugger
        return  dispatch(receiveEvent(event))
        })
}

export const deleteRegistration = (event_id, registration_id) => dispatch => { 
    return ApiEventsUtil.deleteRegistration(event_id, registration_id).then(event => dispatch(receiveEvent(event))) 
}

