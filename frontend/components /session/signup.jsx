import React from 'react' 

class Signup extends React.Component { 
    constructor(props) { 
        super(props); 
            this.state = { 
                email: '', 
                fname: '', 
                lname: '', 
                password: ''
            }
            this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(type) { 
        // debugger
        return(e) => { 
            // debugger
            this.setState({ [type]: e.target.value })
        }
    }

    renderErrors() { 
        return ( 
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error} 
                    </li>
                ))}
            </ul>
        )
    }

    handleSubmit(e) { 
        e.preventDefault() ; 
        // debugger
        const user = Object.assign({}, this.state); 
        this.props.signupUser(user).then( () => this.props.history.push('/'))
    }

    render() { 
        // debugger
        return ( 
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form className="form-signup">
                    {/* <label>Email</label> */}
                    <input type="text" value={this.state.email} placeholder="   email" onChange={this.handleInput('email')}/>
            <div className="names">
                    {/* <label>First Name</label> */}
                    <input type="text" value={this.state.fname} placeholder="   first name" onChange={this.handleInput('fname')} />
                
                    {/* <label>Last Name</label> */}
                    <input type="text" value={this.state.lname} placeholder="   last name" onChange={this.handleInput('lname')} />
            </div>
                    {/* <label>Password</label> */}
                    <input type="password" value={this.state.password} placeholder="   password" onChange={this.handleInput('password')} />
         
                    <button onClick={this.handleSubmit}>Sign Up</button>
                 </form>
                {this.renderErrors()}

            </div>
        );
    }
};

export default Signup; 