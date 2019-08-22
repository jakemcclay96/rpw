import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './css/NavBar.css';
import { thisExpression } from '@babel/types';

import Home from "./Home";
import Updates from "./Updates";
import Filter from "./Filter";
import Contact from "./Contact";



class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test1',
    };
  }
  
  
  render() {
    return (
        <Router>
          <div id="main-nav-wrapper">
            <div id="main-nav">
              <div>
                <Link to="/"><h1>{this.props.logo}</h1></Link> 
              </div>
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


export default Navigation;
