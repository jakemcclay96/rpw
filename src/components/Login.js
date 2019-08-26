import React from 'react';
import { Link } from "react-router-dom";

import './css/Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className="modal-wrapper">
                <div className="login-wrapper">
                  <h1>Login</h1>
                  <hr></hr>
                  <Link to="/"><h3>Back to Home</h3></Link>
                </div>
                
            </div>
        );
    }
}

export default Login;