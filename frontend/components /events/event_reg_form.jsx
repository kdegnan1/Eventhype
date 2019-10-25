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
        this.props.fetchEvents()
    }

    render() { 
        let arr =[]; 
        this.props.events.forEach((event, idx) => { 
            debugger
            if(event.attendees.includes(this.props.currentUser.id)) { 
                arr.push(
                <RegItem 
                key={`event-${idx}`}
                title = {event.title}
                photoUrl={photoUrl}
                location={location}
                start_date={start_date} 
                />
                ) 
            }
        })     
           debugger 
            
            return ( 
            <div>
                <p>event registration</p>
                <ul>
                    <div>
                        {arr} 
                    </div>
                </ul>
            </div>
            
        )
    }
}

export default EventReg; 