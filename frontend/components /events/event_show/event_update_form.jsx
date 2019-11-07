import React from 'react'

class EventUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            title: props.event.title,
            location: props.event.location,
            description: props.event.description,
            start_date: props.event.start_date,
            start_time: props.event.start_time,
            end_date: props.event.end_date, 
            end_time: props.event.end_time,
            organizer: props.event.organizer,
            event_type: props.event.event_type,
            price: props.event.price, 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this); 
        this.handlefix = this.handlefix.bind(this); 
    }

    handleInput(type) {
        return (e) => {
            // debugger
            this.setState({ [type]: e.target.value })
        }
    }

    handlefix() { 
        let starting = this.state.start_time; 
        return starting.slice(11,16)
    }

    handlefix1() { 
        let starting = this.state.end_time; 
        return starting.slice(11,16)
    }

   

    handleSubmit(event) {
        debugger
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
        formData.append("event[id]", this.props.event.id) 
        // if (this.state.photoFile) {
        //     formData.append('event[photo]', this.state.photoFile)
        // }
        this.props.updateEvent(formData).then(() => this.props.history.push('/'))

    }

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

    // componentDidMount() {
    //     this.props.fetchEvent(this.props.match.params.id)
    // }

    render() {
        debugger
        return (
            <div className="create-event-container">
                <div className="banner">
                    <p>Update Event</p> 
                    <button onClick={this.handleSubmit}>Update</button> 
                </div>
                <nav className="bar"></nav>
                <div className="backgroud-create-form">
                    <div className="title">
                        <span className="num">1</span><h2>Event Details</h2>
                    </div>
                    <form className="create-event-form">

                        <label className="title-labels">Event Title</label>
                        <input className="long-input" type="text" value={this.state.title} placeholder="   Give it a short distinct name" onChange={this.handleInput('title')} />

                        <label className="title-label">Location</label>
                        <input className="long-input-location" type="text" value={this.state.location} placeholder="   Venue or address" onChange={this.handleInput('location')} />

                        <div className="date-time">
                            <label>Start</label>
                            <br />
                            <input type="date" value={this.state.start_date} onChange={this.handleInput('start_date')} />
                            <input type="time" value={this.handlefix()} onChange={this.handleInput('start_time')} />
                            <br />
                            <br />
                            <label>End</label>
                            <br />
                            <input type="date" value={this.state.end_date} onChange={this.handleInput('end_date')} />
                            <input type="time" value={this.handlefix1()} onChange={this.handleInput('end_time')} />
                        </div>

                        <label >Event Description</label>
                        <input className="desc-input" type="text" value={this.state.description} onChange={this.handleInput('description')} />

                        <label>Organizer Name</label>
                        <input className="organizer-input" type="text" value={this.state.organizer} onChange={this.handleInput('organizer')} />

                        <label>Price</label>
                        <input className="price-input" type="text" value={this.state.price} onChange={this.handleInput('price')} />

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

                        {/* <input className="input-image" type="file" onChange={this.handleFile} /> */}

                    </form>
                </div>
            </div>
        )
    }

}

export default EventUpdateForm; 