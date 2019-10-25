import React from 'react' 
import Banner from './banner'
import EventInfo from './event_info'
import BodyDesc from './event_description'

class EventShow extends React.Component { 
    constructor(props) { 
        super(props)  
            this.state = { 
             
            }
        
        this.registerButton = this.registerButton.bind(this); 
        this.handleRegister = this.handleRegister.bind(this); 
    }


    componentDidMount() { 
        this.props.fetchEvent(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) { 
        // this.props.fetchEvent(this.props.match.params.id)
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchEvent(this.props.match.params.id);
        }
    }

    handleRegister(e) { 
        debugger
        e.preventDefault(); 
        if (!this.props.currentUser) { 
            this.props.history.push('/signin'); 
            return; 
        }
        // this.setState({registered: !this.state.registered})
        this.props.createRegistration(this.props.event.id)
    }

    // handleUnRegister(e) { 
    //     e.preventDefaul(); 
    //     if(!)
    // }

    registerButton() { 
        debugger
        if (!this.props.event.attendees) { 
            return null
        }

        if (this.props.event.attendees.includes(currentUser.id)) { 
            return (
                <button className="unregister-button" onClick={this.handleRegister}>Unregister</button>
         )
        }else { 
            return ( 
                <button className="toregister-button" onClick={this.handleRegister}>Register</button>
            )
        }
    }

    render() { 
      
        // let {photoUrl, title, description, location, start_date, start_time, end_date, end_time, organizer} = this.props.event
        
        if (!this.props.event) { 
            return null
        }

        // if(this.props.currentUser.id === this.props.event.creator_id) { 
        //     <button onClick={this.props.deleteEvent(this.props.match.params.id)}>Delete Event </button>
        //     else {
        //     return null
        //     }
        // }
        return (
            <div className="event-show-container"> 
                <Banner
                    background = {this.props.event.photoUrl} 
                /> 
                <div className="show-container"> 
                    <div className="side-info">
                        <EventInfo
                            start_date = {this.props.event.start_date}
                            title = {this.props.event.title} 
                            organizer ={this.props.event.organizer} 
                            photo = {this.props.event.photoUrl}
                            price={this.props.event.price}
                        />
                        <div className="bar-show">
                            <div className="register-button">
                                {this.registerButton()} 
                            </div>
                        </div>
                        <BodyDesc 
                            start_date = {this.props.event.start_date}
                            start_time = {this.props.event.start_time}
                            end_date = {this.props.event.end_date}
                            end_time = {this.props.event.end_time}
                            description = {this.props.event.description}
                            title = {this.props.event.title} 
                            organizer = {this.props.event.organizer} 
                            photo = {this.props.event.photoUrl}
                            price={this.props.event.price}
                            location = {this.props.event.location}
                        />
                    </div>
                </div> 
            </div>
        )
    }
}

export default EventShow; 