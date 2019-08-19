import React from 'react';
import './css/Card.css';

function Card(props) {
  return (
    <div className="card-container">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
