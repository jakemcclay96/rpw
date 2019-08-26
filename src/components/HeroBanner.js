import React from 'react';
import { Link } from "react-router-dom";

class HeroBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div id="hero-banner-wrapper">
                <div id="hero-banner"></div>
                <div id="breadcrumb-banner"><h1>{this.props.pageBanner}</h1></div>
            </div>

        );
    }
}

export default HeroBanner;