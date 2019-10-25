import React from 'react' 

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
                arr.push(<div key={`event-${idx}`}>{event.title}</div>) 
            }
            // return( 
            // <div key={`event-${idx}`}>{event.attendees}</div>
            // )
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