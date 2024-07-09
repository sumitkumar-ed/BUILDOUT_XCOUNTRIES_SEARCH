import React from 'react';
import './Card.css';

const Card = ({ country }) => (
  <div className="countryCard">
    <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
    <p>{country.name.common}</p>
  </div>
);

export default Card;
