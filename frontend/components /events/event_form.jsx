import React from 'react' 

class EventForm extends React.Component { 
    constructor(props) { 
        super(props); 
            this.state = { 
                creator_id: currentUser.id,  
                title: '', 
                location: '', 
                description: '', 
                start_date: '', 
                start_time: '', 
                end_date: '', 
                end_time: '', 
                organizer: '', 
                event_type:'', 
                price: '', 
                photoFile: null 
            }
            this.handleSubmit = this.handleSubmit.bind(this); 
            this.handleFile = this.handleFile.bind(this); 
    }

    handleInput(type) {
        return (e) => {
            // debugger
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(event) { 
        event.preventDefault(); 
        const formData = new FormData(); 
        formData.append('event[title]', this.state.title)
        formData.append('event[location]', this.state.location)
        formData.append('event[description]', this.state.description)
        formData.append('event[start_date]', this.state.start_date)
        formData.append('event[start_time]', this.state.start_time)
        formData.append('event[end_date]', this.state.end_date)
        formData.append('event[end_time]', this.state.end_time)
        formData.append('event[price]', this.state.price)
        formData.append('event[organizer]', this.state.organizer) 
        formData.append('event[event_type]', this.state.event_type) 
        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile) 
        }
        this.props.createEvent(formData).then(() => this.props.history.push('/'))

    }

    handleFile(e) { 
        this.setState({photoFile: e.currentTarget.files[0]}); 
    }

    componentDidMount() { 
        window.scrollTo(0,0); 
    }

    render() { 
        return ( 
            <div className="create-event-container">
                <div className="banner"> 
                <p>Create An Event</p>
                <button onClick={this.handleSubmit}>Publish</button>
                </div>
                <nav className="bar"></nav>
                <div className="backgroud-create-form">
                    <div className="title">
                        <span className="num">1</span><h2>Event Details</h2>
                    </div>
                    <form className="create-event-form">

                        <label className="title-labels">Event Title</label>
                        <input className="long-input" type="text" value={this.state.title} placeholder="Give it a short distinct name" onChange={this.handleInput('title')}/>
                        
                        <label className="title-label">Location</label>
                        <input className="long-input-location" type="text" value={this.state.location} placeholder="Venue or address" onChange={this.handleInput('location')} />
                        
                        <div className="date-time"> 
                            <label>Start</label>  
                            <br/>
                            <input type="date"  onChange={this.handleInput('start_date')}/>
                            <input type="time"  onChange={this.handleInput('start_time')}/>
                            <br/>
                            <br/>
                            <label>End</label>
                            <br/>
                            <input type="date"  onChange={this.handleInput('end_date')}/>
                            <input type="time"  onChange={this.handleInput('end_time')}/>
                        </div>

                        <label >Event Description</label>
                        <input className="desc-input" type="text" value={this.state.description} placeholder="   " onChange={this.handleInput('description')} />
                        
                        <label>Organizer Name</label>
                        <input className="organizer-input" type="text" value={this.state.organizer} placeholder="Organizer" onChange={this.handleInput('organizer')}/>

                        <label>Price</label>
                        <input className="price-input" type="text" value={this.state.price} placeholder="Price" onChange={this.handleInput('price')}/>

                        <label>Select Type of Event</label>
                        <select onChange={this.handleInput('event_type')}>
                            <option value="Type">Type</option>
                            <option key={1}>Concert</option>
                            <option key={2}>Brunch</option>
                            <option key={3}>Festival</option>
                            <option key={4}>Nightlife</option>
                            <option key={5}>Food</option>
                            <option key={6}>Sport Event</option>
                        </select>

                        <input className="input-image" type="file" onChange={this.handleFile}/>

                    </form>
                </div>
            </div>
        )
    }

}

export default EventForm; 