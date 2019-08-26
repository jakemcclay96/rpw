import React from 'react';
import { Link } from "react-router-dom";

import HeroBanner from './HeroBanner';

class Updates extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div>
                <HeroBanner pageBanner="Updates PageBanner"  />
                <h1>Updates</h1>
                <hr></hr>
                <Link to="/"><h3>Back to Home</h3></Link>
            </div>
        );
    }
}

export default Updates;