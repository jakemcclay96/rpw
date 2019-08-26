import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './css/NavBar.css';
import { thisExpression } from '@babel/types';





class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test1',
    };
  }
  

  
  
  render() {
    return (
          <div id="main-nav-wrapper">
            <div id="main-nav">
              <div>
                <Link to="/"><h1>{this.props.logo}</h1></Link> 
              </div>
              <div>
                <Link to="/Updates">Updates</Link>
                <Link to="/Filter">Filter</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Login</Link>
              </div>
            </div>  
          </div>  
          
          
          
       
      

    );
  }

    
  


}


export default Navigation;
