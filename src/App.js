import React from 'react';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Card from './components/Card';
import './components/css/Variables.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <div id="main-content-wrapper">
          <div id="card-grid">
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
            <Card heading="Test Card" text="Test Text one two three four." />
          </div>
          
          <Welcome />
        </div>        
    </div>
  );
}

export default App;
