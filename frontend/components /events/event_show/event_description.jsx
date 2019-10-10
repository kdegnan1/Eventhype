import React from 'react' 

const BodyDesc = props => { 
    return ( 
        <div> 
        <h2 className="header-title">About this Event </h2>
        <div className="event-desc">
            <p className="super-desc">{props.description} </p>
            <div className="side-desc-info"> 
                <h3>Date and Time </h3>
                    <div> <p>{props.start_date}</p>{props.start_time}- </div>
                    <div> <p>{props.end_date}</p>{props.end_time} </div>
                <h3> Location </h3>
                    <span>{props.location}</span> 
            </div>

        </div>
        </div>
    )
}

export default BodyDesc