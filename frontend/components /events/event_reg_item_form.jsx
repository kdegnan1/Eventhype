import React from 'react' 

const RegItem = (props) => { 
    return(
        <div className="reg-item">
            <div className="reg-item-content"> 
            <img className="reg-photo" src={props.photoUrl} onClick={props.onEventClick} />
                <p>{props.title}</p>
                <p>{props.location}</p>
                <p>{props.start_date}</p> 
            </div> 
        </div>
    )
}
export default RegItem