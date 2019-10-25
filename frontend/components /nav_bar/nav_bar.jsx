import React from 'react' ; 
import {Link} from 'react-router-dom' 
import Dropdown from '../dropdown/dropdown'

export default ({ currentUser, logoutUser }) => { 
    const display = currentUser ? ( 
        <div className="logz">

        
            <a href="https://www.linkedin.com/in/katherine-degnan-8a1b7372/">
                <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/linkedin.png"} className="linkedin"/>
            </a>

            <a href="https://github.com/kdegnan1">
                <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/github.jpg"} className="github"/>
            </a>

            <div className="box">

                <div className="create-event-box">
                    <Link to="/create_event">
                        <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/images-3.png"} className="plus" />
                    </Link>
                    <Link className="button-create" to='/create_event'>Create Event</Link> 

                </div>

                <div className="user-event-box">
                    <Link to="/user_events">
                            <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/images-4.png"} className="register-logo" />
                    </Link>
                    <Link className="button-user-events" to='/user_events'>Events</Link> 
                </div>
            
            </div>

            <button className="button-logout" onClick={logoutUser}>Log Out</button> 
            
            {/* <Dropdown />  */}

        </div>
    ) : (
        <div>
            {/* <Link className="button-signin" to='/signup'>Sign Up </Link> */}
            <Link className="button-signin" to='/signin'>Sign In</Link>
            
        </div>
    ); 

    return ( 
        <header className="nav-bar">
            <Link className="logo" to='/'>eventhype</Link>
            <div>
                {display} 
            </div>
        </header>
    );
}