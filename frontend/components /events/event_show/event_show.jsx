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
        this.updateButton = this.updateButton.bind(this); 
        this.handleRegister = this.handleRegister.bind(this); 
        this.handleUnRegister = this.handleUnRegister.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.handleLike = this.handleLike.bind(this) ;
        this.handleUnLike = this.handleUnLike.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this); 
    }


    componentDidMount() { 
        debugger
        this.props.fetchEvent(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) { 
        debugger
        // this.props.fetchEvent(this.props.match.params.id)
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchEvent(this.props.match.params.id);
        }
    }

    handleRegister(e) { 
        // debugger
        e.preventDefault(); 
        if (!this.props.currentUser) { 
            this.props.history.push('/signin'); 
            return; 
        }
        // this.setState({registered: !this.state.registered})
        this.props.createRegistration(this.props.event.id)
    }

    handleUnRegister(e) { 
        // debugger 
        e.preventDefault(); 
        this.props.deleteRegistration(this.props.event.id) 
    }

    handleLike(e) { 
        debugger 
        e.preventDefault(); 
        if (!this.props.currentUser) {
            this.props.history.push('/signin');
            return;
        }
        this.props.createLike(this.props.event.id)
    }

    handleUnLike(e) { 
        debugger
        e.preventDefault(); 
        this.props.deleteLike(this.props.event.id) 
    }

    fixstarttime() {
        let starttime = new Date(this.props.event.start_time)
        let starttime_hours = starttime.getHours();
        let starttime_minutes = starttime.getMinutes(); 
        let last;
        let newhour;

        if (starttime_hours < 12) { 
            return starttime_hours + ":" + starttime_minutes + '0' +  'AM'
        } else {
            return (starttime_hours - 12) + ':' + starttime_minutes + '0' + 'PM'
        }
    }

    fixendtime() {
        let endtime = new Date(this.props.event.end_time)
        let endtime_hours = endtime.getHours();
        let endtime_minutes = endtime.getMinutes(); 
        let last1;
        let newhour1;

        if (endtime_hours < 12) {
            return endtime_hours + ":" + endtime_minutes + '0'+ 'AM'
        } else {
            return (endtime_hours - 12) + ':' + endtime_minutes + '0' + 'PM'
        }
    }

    handleDelete(e) { 
        e.preventDefault(); 
        this.props.deleteEvent(this.props.event.id).then(() => this.props.history.push('/'))
    }

    handleUpdate(e) { 
        e.preventDefault(); 
        debugger
        this.props.history.push(`/events/${e.currentTarget.value}/update`)
    }
 
    updateButton() { 
        let userID = this.props.currentUser.id; 
        let creatorID = this.props.event.creator_id; 
        debugger
        if (userID === creatorID) {
            debugger 
           return <button className="button-edit" value={this.props.event.id} onClick={this.handleUpdate}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/71-512.png"} /></button>
        }
    }

    registerButton() { 
        debugger
        if (!this.props.event.attendees) { 
            return null
        }

        if (!this.props.currentUser) { 
            return (
                <button className="toregister-button" onClick={this.handleRegister}>Register</button>
            )
        }
        debugger
        if (this.props.event.attendees.includes(this.props.currentUser.id)) { 
            debugger 
            return (
                <button className="unregister-button" onClick={this.handleUnRegister}>Unregister</button>
         )
        }else { 
            debugger
            return ( 
                <button className="toregister-button" onClick={this.handleRegister}>Register</button>
            )
        }
    }

    likeButton() { 
        debugger 
        // if (this.props.currentUser) { 
        //     debugger
        //     return (
        //         <button className="button-tolike" onClick={this.handleLike}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/heart-outline-512.png"} /></button>
        //     )
        // }
        debugger 
        if (this.props.event.likers.includes(this.props.currentUser.id)) { 
            debugger
            return ( 
                <button className="button-unlike" onClick={this.handleUnLike}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/images.png"}/></button> 
            )
        }else { 
            debugger
            return( 
                <button className="button-tolike" onClick={this.handleLike} ><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/heart-outline-512.png"} /></button>
            )
        }

    }

    render() { 
      
        // let {photoUrl, title, description, location, start_date, start_time, end_date, end_time, organizer} = this.props.event
        
        if (!this.props.event) { 
            return null
        }

       

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
                            <div>
                                {this.updateButton()} 
                            </div> 
                            <button className="button-delete" onClick={this.handleDelete}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/Trash-512.png"} /></button>
                            <div className="button-like" >{this.likeButton()}</div>
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
                            fixstart={this.fixstarttime()}
                            fixend={this.fixendtime()}
                        />
                    </div>
                </div> 
            </div>
        )
    }
}

export default EventShow; 