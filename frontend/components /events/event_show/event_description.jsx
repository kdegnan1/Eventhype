import React from 'react' 

const BodyDesc = props => { 

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let startdate = new Date(props.start_date) 
    let starttime = new Date(props.start_time) 
    let enddate = new Date(props.end_date) 
    let endtime = new Date(props.end_time) 

    debugger 
    return ( 
        <div> 
        <h2 className="header-title">About this Event </h2>
        <div className="event-desc">
            <p className="super-desc">{props.description} </p>
            <div className="side-desc-info"> 
                <h3>Date and Time </h3>
                    <div> Start: <p>{props.start_date}</p>{props.start_time}- </div>
                    <div> End: <p>{props.end_date}</p>{props.end_time} </div>
                <h3> Location </h3> 
                    <span>{props.location}</span> 
            </div>

        </div>
        </div>
    )
}

export default BodyDesc