import React from 'react' 

const Banner = props => { 
    return ( 
        <div className="banner-show"
            style={{
                background: `url(${props.background})`,
                width: '100%',
                height: 500, 
            }} 
        />
    )
}

export default Banner; 