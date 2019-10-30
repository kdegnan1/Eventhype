import React from 'react' 
import {Link} from 'react-router-dom' 



const Footer = (props) => { 

    return ( 
        <div className="footer">
            <div className="logz">
                <a className="firsty" href="https://www.linkedin.com/in/katherine-degnan-8a1b7372/">
                    <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/linkedin.png"} className="linkedin" />
                </a>

                <a href="https://github.com/kdegnan1">
                    <img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/github.jpg"} className="github" />
                </a>
            </div>
        </div>
    )
}

export default Footer;