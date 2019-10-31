import React from 'react' 

const RegItem = (props) => { 
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    debugger
    let fulldate = new Date(props.start_date)
    let year = fulldate.getFullYear();
    let month = months[fulldate.getMonth()];
    let date = fulldate.getDate();
    let weekday = days[fulldate.getDay()];
    let indexdate = weekday + ", " + month + ' ' + date +', '+ year;

    return(
        <div className="reg-item">
            <img className="reg-photo" src={props.photoUrl} onClick={props.onEventClick} />
            <div className="reg-item-content"> 
                <p className="reg-title">{props.title}</p> 
                <p className="reg-start">{indexdate}</p> 
                <p className="reg-location">{props.location}</p>  
            </div> 
        </div>
    )
}

export default RegItem