import React from 'react' 
import IndexItem from './event_index_item'

class EventIndex extends React.Component { 
    constructor(props) { 
        super(props); 
            this.state = { 

            }
            this.handleEventClick = this.handleEventClick.bind(this) 
    }

    componentDidMount() { 
        this.props.fetchEvents(); 
    }

    handleEventClick(id) { 
      return () => {
          this.props.history.push(`/events/${id}`)
        }
    }

    render() { 
        let rows = this.props.events.map((event, idx) => { 
            let {location, title, photoUrl, id, start_date} = event; 
            return (
                <IndexItem
                    key = {idx}
                    photoUrl = {photoUrl}
                    location = {location}
                    title = {title} 
                    start_date = {start_date} 
                    onEventClick = {this.handleEventClick(id)} 
                />
            )
        });

        return ( 
            <div className="index-background"> 
                <div className="index-container"> 
                
                <div className="index-header"> <p className="popular">Popular in</p> <p className="newyork"> New York </p> </div> 
                    <div className="events-grid"> 
                        <ul className="rows">
                            {rows} 
                        </ul>
                    </div> 
                </div>
            </div> 
        )
        
    }
}

export default EventIndex; 