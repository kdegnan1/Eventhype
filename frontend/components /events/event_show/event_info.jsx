import React from 'react' 

const EventInfo = props => { 
    return ( 
        <div className="event-info">     
            <img className="prof-pic" src={props.photo}/>
            <div className="event-small-info"> 
                <span className="small-date">{props.start_date}</span>
                <h1 className="small-title">{props.title}</h1>
                <span className="small-organizer">{props.organizer} </span>
                <p className="small-price"> {props.price} </p>
            </div>
        </div>    
    )
}

export default EventInfo; 