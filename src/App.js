import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from "./components/Home";
import Updates from "./components/Updates";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import './components/css/Variables.css';
import './App.css';


function App() {

  

  return (
    <Router>
      <div className="App">
        <Navigation logo="PW" />  

      
        <div id="main-content-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Updates" component={Updates} />
              <Route exact path="/Filter" component={Filter} />
              <Route path="/Contact" component={Contact} />
            </Switch>
        </div>

        <Footer logo="POEWizard" />

      </div> 
    </Router>
    
  );
}

export default App;
