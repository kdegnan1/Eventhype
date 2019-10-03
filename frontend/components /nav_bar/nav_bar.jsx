import React from 'react' ; 
import {Link} from 'react-router-dom' 
import Dropdown from '../dropdown/dropdown'

export default ({ currentUser, logoutUser }) => { 
    const display = currentUser ? ( 
        <div>
            {/* need drop down menu for belllow button */}
            {/* <button onClick={logoutUser}>Log Out</button>  */}
            <Dropdown /> 

        </div>
    ) : (
        <div>
            <Link className="button-signin" to='/signup'>Sign Up </Link>
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