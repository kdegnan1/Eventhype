import React from 'react' 

const IndexItem = (props) => { 
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ];
    debugger
    let fulldate = new Date(props.start_date)
    let year = fulldate.getFullYear() ;
    let month = months[fulldate.getMonth()] ;
    let date = fulldate.getDate() ;
    let weekday = days[fulldate.getDay()] ;
    let indexdate = weekday + ", " + month +' '+ date ;
 
    
    return ( 
        <div className="index-item">
            <img className="index-photo" src={props.photoUrl} onClick={props.onEventClick}/>
            <div className="index-item-content" >
                <p className="index-item-date">{indexdate}</p> 
                <p className="index-item-title" onClick={props.onEventClick}>{props.title}</p>
                <span className="index-item-location">
                    {props.location} 
                </span>
            </div>
        </div>
    )
}

export default IndexItem; 