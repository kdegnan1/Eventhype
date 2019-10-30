import React from 'react' 

const EventInfo = props => { 
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    debugger
    let fulldate = new Date(props.start_date) 
    let year = fulldate.getFullYear();
    let month = months[fulldate.getMonth()];
    let date = fulldate.getDate();
    let weekday = days[fulldate.getDay()];
    let indexdate1 = month + ' ' + date;
    return ( 
        <div className="event-info">     
            <img className="prof-pic" src={props.photo}/>
            <div className="event-small-info"> 
                <span className="small-date">{indexdate1}</span> 
                <h1 className="small-title">{props.title}</h1>
                <span className="small-organizer">{props.organizer} </span>
                <p className="small-price"> {props.price} </p>
            </div>
        </div>    
    )
}

export default EventInfo; 