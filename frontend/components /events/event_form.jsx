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
                event_type: '', 
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
        formData.append('event[photo]', this.state.photoFile) 
        this.props.createEvent(formData).then(() => this.props.history.push('/'))

    }

    handleFile(e) { 
        this.setState({photoFile: e.currentTarget.files[0]}); 
    }

    render() { 
        return ( 
            <div className="create-event-container">
                <h2>Event Details</h2>
                <form className="create-event-form">
                    <label>Event Title</label>
                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.handleInput('title')}/>
                    
                    <label>Location</label>
                    <input type="text" value={this.state.location} placeholder="Venue or address" onChange={this.handleInput('location')} />
                    <div className="date-time"> 
                        <label>Start</label>
                        <input type="text" placeholder="10/01/2019" onChange={this.handleInput('start_date')}/>
                        <input type="text" placeholder="07:00pm" onChange={this.handleInput('start_time')}/>
                        
                        <label>End</label>
                        <input type="text" placeholder="10/12/2019" onChange={this.handleInput('end_date')}/>
                        <input type="text" placeholder="10:00pm" onChange={this.handleInput('end_time')}/>
                    </div>
                    <label >Event Description</label>
                    <input type="text" value={this.state.description} placeholder="Description" onChange={this.handleInput('description')} />
                    
                    <label>Organizer Name</label>
                    <input type="text" value={this.state.organizer} placeholder="Organizer" onChange={this.handleInput('organizer')}/>

                    <label>Price</label>
                    <input type="text" value={this.state.price} placeholder="Price" onChange={this.handleInput('price')}/>

                    <select onChange={this.handleInput('event_type')}>
                        <option value="Type">Type</option>
                        <option key={1}>Concert</option>
                        <option key={2}>Cooking Class</option>
                        <option key={3}>Festival</option>
                        <option key={4}>Conference</option>
                        <option key={5}>Dinner</option>
                        <option key={6}>Sport Event</option>
                        </select>

                    <input type="file" onChange={this.handleFile}/>

                        <button onClick={this.handleSubmit}>Make Your Event Live</button>
                </form>
            </div>
        )
    }

}

export default EventForm; 