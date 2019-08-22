import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Router>
           <div id="main-footer-wrapper">
            <div id="main-footer">
              <div>
                <a href="/">
                  <h1>{this.props.logo}</h1>
                </a>
              </div>
              <hr style={{width:'100%'}}></hr>
              <div>
                <Link to="/Updates">Updates</Link>
                <Link to="/Filter">Filter</Link>
                <Link to="/Contact">Contact</Link>
              </div>
            </div>  
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Updates" component={Updates} />
            <Route path="/Filter" component={Filter} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </Router>
    );
  }
}

export default Footer;
