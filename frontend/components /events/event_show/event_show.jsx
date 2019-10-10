import React from 'react' 
import Banner from './banner'
import EventInfo from './event_info'
import BodyDesc from './event_description'

class EventShow extends React.Component { 
    constructor(props) { 
        super(props)  
            this.state = { 

            }
        
    }

    componentDidMount() { 
        this.props.fetchEvent(this.props.match.params.id)
    }

    render() { 
        debugger
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
                        <div className="bar-show"></div>
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