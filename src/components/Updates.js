import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Updates extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div>

                <Link to="/Updates/Test"><h1>Updates</h1></Link>
                <Link to="/"><h3>Back to Home</h3></Link>
                <hr></hr>
                
            </div>);
    }
}

export default Updates;