import React from 'react' 

const RegItem = (props) => { 
    return(
        <div className="reg-item">
            <img className="reg-photo" src={props.photoUrl} onClick={props.onEventClick} />
            <div className="reg-item-content"> 
                <p className="reg-title">{props.title}</p> 
                <p className="reg-start">{props.start_date}</p> 
                <p className="reg-location">{props.location}</p>  
            </div> 
        </div>
    )
}

export default RegItem