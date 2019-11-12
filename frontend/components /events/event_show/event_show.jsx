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
        debugger
        let starttime = new Date(this.props.event.start_time)
        let starttime_hours = starttime.getHours() + 5;
        let starttime_minutes = starttime.getMinutes(); 

        if(starttime_hours > 24) { 
            starttime_hours = starttime_hours % 24
        }

        if (starttime_hours < 12) { 
            return (starttime_hours) + ":" + starttime_minutes + '0' +  'AM'
        } else if(starttime_hours === 12) {
            return (starttime_hours) + ':' + starttime_minutes + '0' + 'PM'
        }else { 
            return (starttime_hours - 12) + ':' + starttime_minutes + '0' + 'PM'
        }
    }

    fixendtime() {
        debugger
        let endtime = new Date(this.props.event.end_time)
        let endtime_hours = endtime.getHours() + 5;
        let endtime_minutes = endtime.getMinutes(); 

        if (endtime_hours > 24) {
            endtime_hours = endtime_hours % 24
        }

        if (endtime_hours < 12) {
            return (endtime_hours) + ":" + endtime_minutes + '0'+ 'AM'
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
        if (this.props.currentUser) { 
            let userID = this.props.currentUser.id; 
            let creatorID = this.props.event.creator_id; 
            debugger
            if (userID === creatorID) {
                debugger 
            return <button className="button-edit" value={this.props.event.id} onClick={this.handleUpdate}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/71-512.png"} /></button>
            }
        }else{
            return null; 
        }
    }

    deleteButton() { 
        if (this.props.currentUser) {
            let userID = this.props.currentUser.id;
            let creatorID = this.props.event.creator_id;
            debugger
            if (userID === creatorID) {
                debugger
                return <button className="button-delete" onClick={this.handleDelete}><img src={"https://eventhype-pic.s3.us-east-2.amazonaws.com/Trash-512.png"} /></button>
            } 
        } else {
            return null;
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
        if (this.props.currentUser) { 
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
                            <div>
                                {this.deleteButton()}
                            </div>
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