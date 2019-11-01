import React from 'react' 
import RegItem from './event_reg_item_form'

class EventReg extends React.Component { 
    constructor(props) { 
        super(props) 
            this.state = { 

            }   
    }

    componentDidMount() {
        debugger 
        this.props.fetchUser(this.props.currentUser.id)
    }



    handleEventClick(id) {
        return () => {
            this.props.history.push(`/events/${id}`)
        }
    }

    render() { 
        let count = this.props.currentUser.registered.length; 
        let arr =[]; 
        this.props.events.forEach((event, idx) => { 
            debugger
            if(event.attendees.includes(this.props.currentUser.id)) { 
                arr.push(
                <RegItem 
                key={`event-${idx}`}
                title = {event.title}
                photoUrl={event.photoUrl}
                location={event.location}
                start_date={event.start_date} 
                onEventClick = {this.handleEventClick(event.id)}
                />
                ) 
            }
        })       
           debugger 
            
            return ( 
            <div className="reg-window">
                <div className="backsplash">
                    <div className="user-info">
                        <img className="prof-pic-show" src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/Screen+Shot+2019-10-29+at+12.53.22+PM.png"}/>
                            <div className="name-title-div">
                                <div>
                                    <span className="name-title">{this.props.currentUser.fname}</span>
                                    <span className="name-title">{this.props.currentUser.lname}</span>
                                </div>
                                <div className="reg-likes">
                                    <span>{count} events </span>
                                    <span className="like-me"># likes</span>
                                </div>
                            </div> 
                    </div>
                    <p className="title-event">Events</p>
                    <ul>
                        <div className="event-list">
                            {arr} 
                        </div>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default EventReg; 