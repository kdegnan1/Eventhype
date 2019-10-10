import React from 'react' 

const IndexItem = (props) => { 
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