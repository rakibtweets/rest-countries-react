import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Country.css';

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Total country: {countries.length}</h1>
      <div className="country-container">
        {countries.map((country) => (
          <SingleCountry key={country.flag} country={country}></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
