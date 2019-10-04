import React from 'react' 
// import {finduser} from '../../util /session_api_util'

class FindEmail extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const email = Object.assign({}, this.state);
        this.props.findUser(email).then((user) => {
            this.props.history.push({
                    pathname:'/signin/login',
                    // debugger
                    state: {email: this.state.email}
        })
    }  , () => this.props.history.push({
                    pathname: '/signin/signup', 
                    state: {email: this.state.email }
            })
        )
}

    render() { 
        return ( 
            <div className="email-container">
                <h2>Let's get started</h2>
                <form className="form-email">
                    <input type="text" value={this.state.email} placeholder="  email" onChange={this.handleInput('email')}  />
                    <button onClick={this.handleSubmit}>Get Started</button>
                </form>
            </div>
        )
    }

}

export default FindEmail; 