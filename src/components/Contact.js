import React from 'react';
import { Link } from "react-router-dom";

import HeroBanner from './HeroBanner';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div>
                <HeroBanner pageBanner="ContactPageBanner"  />
                <h1>Contact</h1>
                <hr></hr>
                <Link to="/"><h3>Back to Home</h3></Link>
            </div>
        );
    }
}

export default Contact;