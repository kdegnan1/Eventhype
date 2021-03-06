import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Signin extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            email: props.email,
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul className="autherrors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
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
                 <img className="userpic" src={window.imagesURL} />
                <h2>Welcome back</h2> 
                <p>Please enter your password to log in.</p>
                <form className="form-signin">
                    {/* <label>Email</label> */}
                    <input type="text" value={this.props.email} placeholder="  Email address" onChange={this.handleInput('email')} />

                    {/* <label>Password</label> */}
                    <input type="password" value={this.state.password} placeholder="  Password" onChange={this.handleInput('password')} />

                    <button onClick={this.handleSubmit}>Log In</button>
                    <link rel="stylesheet" href=""/>
                </form>
                {this.renderErrors()}

            </div>
        );
    }
};

export default Signin; 