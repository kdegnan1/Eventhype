import React from 'react' 

class Signup extends React.Component { 
    constructor(props) { 
        super(props); 
        // debugger
            this.state = { 
                email: props.location.state.email, 
                fname: '', 
                lname: '', 
                password: ''
            }
            this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleInput(type) { 
        return(e) => { 
            // debugger
            this.setState({ [type]: e.target.value })
        }
    }

    // renderErrors() { 

    //     return ( 
    //         <ul className="errors-container">
    //             {this.props.errors.map((error, i) => (
    //                 <li className="autherrors" key={`error-${i}`}>
    //                     {error} 
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }

    handleSubmit(e) { 
        e.preventDefault() ; 
        // debugger
        const user = Object.assign({}, this.state); 
        this.props.signupUser(user).then( () => this.props.history.push('/'))
    }

    render() { 
        let fnameError = null;
        let lnameError = null;
        let passwordError = null;
        let fnameClassError;
        let lnameClassError;
        let passwordClassError;
        const errorWords = ['Fname', 'Lname', 'Password'] 

        this.props.errors.forEach(error=> { 
            let ele = error.split(' ')[0] 
            if(errorWords.includes(ele)) { 
                switch(ele) { 
                    case 'Fname': 
                    fnameClassError = 'err', 
                    fnameError = <div className="signup-error">{'Please enter a first name.'}</div>
                    return; 
                    case 'Lname': 
                    lnameClassError = 'err', 
                    lnameError = <div className="signup-error">{'Please enter a last name'}</div>
                    return; 
                    case 'Password': 
                    passwordClassError = 'err', 
                    passwordError = <div className="signup-error">{'Password length must be more than 6 characters'}</div>
                    return; 
                }
            }
        })


        return ( 
            <div className="signup-container">
                <img className="userpic" src={window.imagesURL} />
                <h2>Welcome</h2>
                <p>Create an account.</p>
                <form className="form-signup">
                    <input type="text" value={this.state.email} placeholder="   Email address" onChange={this.handleInput('email')}/>
                    <input className ={'signup-input ${fnameClassError}'} type="text" value={this.state.fname} placeholder="   First name" onChange={this.handleInput('fname')} />
                    {fnameError}
                    <input className={'signup-input ${lnameClassError}'} type="text" value={this.state.lname} placeholder="   Last name" onChange={this.handleInput('lname')} />
                    {lnameError}
                    <input className={'signup-input ${passwordClassError}'} type="password" value={this.state.password} placeholder="   Password" onChange={this.handleInput('password')} />
                    {passwordError}
                    <button onClick={this.handleSubmit}>Sign Up</button>
                 </form>
                {/* {this.renderErrors()} */}

            </div>
        );
    }
};

export default Signup; 