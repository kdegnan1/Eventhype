import * as ApiEventsUtil from '../util /event_api_utl'

export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const REMOVE_EVENT = 'REMOVE_EVENT'

const receiveEvent = (event) => { 
   ////debugger
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

const removeEvent = (id) => { 
    return({ 
        type: REMOVE_EVENT, 
        id 
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

export const updateEvent = (formData) => dispatch => { 
<<<<<<< HEAD
    //debugger
    return ApiEventsUtil.updateEvent(formData).then(
        event => { 
            ////debugger
=======
    debugger
    return ApiEventsUtil.updateEvent(formData).then(
        event => { 
            debugger
>>>>>>> 0f7a53214ea908d6adcd92b555f347a5a98333af
            return dispatch(receiveEvent(event))
        })
}

export const deleteEvent = (id) => dispatch => { 
    return ApiEventsUtil.deleteEvent(id).then(id => dispatch(removeEvent(id)))
}

export const createRegistration = (event_id) => dispatch => { 
<<<<<<< HEAD
    //debugger
    return ApiEventsUtil.createRegistration(event_id).then(
        event => { 
            //debugger
=======
    debugger
    return ApiEventsUtil.createRegistration(event_id).then(
        event => { 
            debugger
>>>>>>> 0f7a53214ea908d6adcd92b555f347a5a98333af
        return  dispatch(receiveEvent(event))
        })
}


export const deleteRegistration = (event_id, registration_id) => dispatch => { 
    return ApiEventsUtil.deleteRegistration(event_id, registration_id).then(event => dispatch(receiveEvent(event))) 
}

export const createLike = event_id => dispatch => { 
<<<<<<< HEAD
    //debugger
    return ApiEventsUtil.createLike(event_id).then(
            event => { 
                //debugger
=======
    debugger
    return ApiEventsUtil.createLike(event_id).then(
            event => { 
                debugger
>>>>>>> 0f7a53214ea908d6adcd92b555f347a5a98333af
                return dispatch(receiveEvent(event))
                })
}

export const deleteLike = event_id => dispatch => { 
    return ApiEventsUtil.deleteLike(event_id).then(event => dispatch(receiveEvent(event))) 
}
