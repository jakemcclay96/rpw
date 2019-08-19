import React from 'react';
import './css/NavBar.css';

function NavBar() {

  const logoText = "PW";

  return (
    <div id="main-nav-wrapper">
      <div id="main-nav">
        <div>
          <a href="/">
            <h1>{logoText}</h1>
          </a>
        </div>
        <div>
          <a href="#">Updates</a>
          <a href="#">Filter</a>
          <a href="#">Contact</a>
        </div>
      </div>  
    </div>
  );
}

export default NavBar;
