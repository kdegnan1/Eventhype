//fetchevent 
export const fetchEvents = () => { 
    return (
        $.ajax({
            method: 'GET',
            url: `/api/events`, 
        })
    )
}

export const fetchEvent = id => { 
    return ( 
        $.ajax({ 
            method: 'GET', 
            url: `/api/events/${id}`,
            data: {event: {id}}
        })
    )
}

export const createEvent = (formData) => { 
    return (
        $.ajax({
            method: 'POST',
            url: `/api/events`, 
            data: formData,
            contentType: false,
            processData: false
        })
    )
}

export const updateEvent = (formData) => { 
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/events/${formData.get('event[id]')}`,  //append event.id 
            data: formDAta
        })
    )
}

export const deleteEvent = (id) =>{ 
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/events/${id}`
        })
    )
}

export const createRegistration = (event_id) => {
    debugger 
    return (
        $.ajax({
            method: 'POST',
            url: `/api/events/${event_id}/event_registrations`
        })
    )
}

export const deleteRegistration = (event_id) => {
    // debugger
    return (
        $.ajax({
            method: 'DELETE',
            // url: `/api/events/${event_id}/event_registrations/${registration_id}`
            url: `/api/events/${event_id}/event_registrations`
        })
    )
}

export const createLike = (event_id) => { 
    return (
        $.ajax({ 
            method: 'POST', 
            url: `/api/events/${event_id}/event_likes`
        })
    )
}

export const deleteLike = (event_id) => { 
    return (
        $.ajax({ 
            method: 'POST', 
            url: `/api/events/${event_id}/event_likes`
        })
    )
}