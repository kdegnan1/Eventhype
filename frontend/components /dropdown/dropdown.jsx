import React from 'react' 

class Dropdown extends React.Component { 
    constructor(props) { 
        super(props) ; 
            this.state = { 
                display: false 
            }

            this.display = this.display.bind(this);
            this.hidedrop = this.hidedrop.bind(this);
            this.logout = this.logout.bind(this); 
    }

    display(e) { 
        e.preventDefault(); 
        this.setState({ display: true}, () => { 
            document.addEventListener('click', this.hidedrop)
        }); 
    }

    hidedrop(e){ 

            if(this.dropdownMenu.contains(e.target)) {
            this.setState({ display: false}, () => {
                document.removeEventListener('click', this.hidedrop)
            }); 
        }
    }

    logout(){ 
        this.props.logoutUser()
    }

    render () { 
        return ( 
            <div className="dropdown">
                <button onClick={this.display}>Dropdown</button>
                    {this.state.display ? (
                    <div className="dropmenu" ref={(element) => {this.dropdownMenu = element}}>
                        <button onClick={this.logout}>Log Out</button>
                        <button>Personal Website</button>
                        <button>Github</button>
                    </div>
                    ) : (
                    null
                    )
                    }
            </div>
        )
    }
}

export default Dropdown; 