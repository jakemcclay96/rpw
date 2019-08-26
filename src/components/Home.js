import React from 'react';
import { Link } from "react-router-dom";


import HeroBanner from './HeroBanner';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div>
                <HeroBanner pageBanner="HomeBanner" />
                <h1>Home</h1>
                <hr></hr>
            </div>
        );
    }
}

export default Home;