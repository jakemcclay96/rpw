import React from 'react';
import { Link } from "react-router-dom";
import './css/Footer.css';
import { tsConstructorType } from '@babel/types';

import Home from "./Home";
import Updates from "./Updates";
import Filter from "./Filter";
import Contact from "./Contact";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
          <div>
            <div id="main-footer-wrapper">
              <div id="main-footer">
                <div>
                  <a href="/">
                    <h1>{this.props.logo}</h1>
                  </a>
                </div>
                <hr style={{width:'100%'}}></hr>
                <div className="flex-footer-vert">
                  <Link to="/Updates">Updates</Link>
                  <Link to="/Filter">Filter</Link>
                  <Link to="/Contact">Contact</Link>
                  <Link to="/">Back to Home</Link>
                </div>
              </div>  
            </div>
          </div>
    );
  }
}

export default Footer;
