import React from 'react' 
// import {finduser} from '../../util /session_api_util'

class FindEmail extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.demoLogin = this.demoLogin.bind(this); 
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
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

    demoLogin(e) { 
        e.preventDefault(); 
        this.props.loginUser({ email: 'katherine', password: 'password' }).then(() => this.props.history.push('/'))
    }

    render() { 
        return ( 
            <div className="email-container">
                <img className="elogo" src={window.elogoURL} />
                <h2>Let's get started</h2>
                <p>Use email to get started.</p>
                <form className="form-email">
                    <input type="text" value={this.state.email} placeholder="  Email address" onChange={this.handleInput('email')}  />
                    <button onClick={this.handleSubmit}>Get Started</button>
                    <button onClick={this.demoLogin}className="demo">Demo User</button>
                </form>
            </div>
        )
    }

}

export default FindEmail; 