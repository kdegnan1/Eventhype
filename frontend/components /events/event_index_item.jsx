import React from 'react' 

const IndexItem = (props) => { 
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ]
    return ( 
        <div className="index-item">
            <img className="index-photo" src={props.photoUrl} onClick={props.onEventClick}/>
            <div className="index-item-content" >
                <p className="index-item-date">{props.start_date}</p>
                <p className="index-item-title" onClick={props.onEventClick}>{props.title}</p>
                <span className="index-item-location">
                    {props.location} 
                </span>
            </div>
        </div>
    )
}

export default IndexItem; 