import React from 'react' 

const BodyDesc = props => { 

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let startdate = new Date(props.start_date);
    let startdate_weekday = days[startdate.getDay()];
    let startdate_month = months[startdate.getMonth()];
    let startdate_year = startdate.getFullYear(); 
    let startdate_date = startdate.getDate() + 1; 
    let start = '  ' +  startdate_weekday + ', ' + startdate_month + " " + startdate_date + ', ' + startdate_year

  

    let enddate = new Date(props.end_date) 
    let enddate_weekday = days[enddate.getDay()];
    let enddate_month = months[enddate.getMonth()];
    let enddate_year = enddate.getFullYear();
    let enddate_date = enddate.getDate() + 1; 
    let end = enddate_weekday + ', ' + enddate_month + " " + enddate_date + ', ' + enddate_year


  

 


    debugger 
    return ( 
        <div> 
        <h2 className="header-title">About this Event </h2>
        <div className="event-desc">
            <p className="super-desc">{props.description} </p>
            <div className="side-desc-info"> 
                <h3>Date and Time </h3> 
                    <div> <p>{start}</p>{props.fixstart} <p>-</p></div> 
                   {/* <br/> */}
                    <div> <p>{end}</p>{props.fixend}</div>
                <h3 className="loc"> Location </h3> 
                    <span>{props.location}</span> 
            </div>

        </div>
        </div>
    )
}

export default BodyDesc