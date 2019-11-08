import React from 'react' 
import IndexItem from './event_index_item'

class EventIndex extends React.Component { 
    constructor(props) { 
        super(props); 
            this.state = { 
                category: "All Categories"
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
            if (
                this.state.category === "All Categories" ||
                event.category === this.state.category
            ) {
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
            }
        });

        return ( 
            <div className="index-background"> 
                <div className="index-container"> 
                    <div className="index-header"> <p className="popular">Popular in</p> <p className="newyork"> New York </p> </div> 
                <div className="select-category">
                    <select className="selector" value={this.state.category} onChange={this.update("category")}>
                            <option value="All Categories">All Categories</option>
                            <option key={1}>Concert</option>
                            <option key={2}>Brunch</option>
                            <option key={3}>Festival</option>
                            <option key={4}>Nightlife</option>
                            <option key={5}>Food</option>
                            <option key={6}>Sport Event</option>
                    </select>
                </div>
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