import React from 'react';
import { Link } from "react-router-dom";

import HeroBanner from './HeroBanner';

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div>
                <HeroBanner pageBanner="FilterPageBanner"  />
                <h1>Filter</h1>
                <hr></hr>
                <Link to="/"><h3>Back to home</h3></Link>
            </div>
        );
    }
}

export default Filter;