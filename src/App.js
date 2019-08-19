import React from 'react';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import './components/css/Variables.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
    </div>
  );
}

export default App;
