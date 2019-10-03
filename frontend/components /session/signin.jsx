import React from 'react'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        const user = Object.assign({}, this.state);
        this.props.loginUser(user).then(() => this.props.history.push('/'))
        //push!!
    }

    render() {
        return (
            <div className="signin-container">
                <h2>Let's get started</h2>
                <form className="form-signin">
                    {/* <label>Email</label> */}
                    <input type="text" value={this.state.email} placeholder="  email" onChange={this.handleInput('email')} />

                    {/* <label>Password</label> */}
                    <input type="password" value={this.state.password} placeholder="  password" onChange={this.handleInput('password')} />

                    <button onClick={this.handleSubmit}>Get Started</button>
                    <link rel="stylesheet" href=""/>
                </form>
            </div>
        );
    }
};

export default Signin; 