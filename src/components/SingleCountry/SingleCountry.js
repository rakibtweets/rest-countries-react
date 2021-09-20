import React from 'react';
import './SingleCountry.css';

const SingleCountry = (props) => {
  const { name, capital, population, flag } = props.country;
  return (
    <div className="single-country">
      <img className="country-img" src={flag} alt="" />
      <h2>Country Name: {name}</h2>
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
    </div>
  );
};

export default SingleCountry;
