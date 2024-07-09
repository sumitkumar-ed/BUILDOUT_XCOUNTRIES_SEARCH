import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api/api';
import Card from '../Card/Card';
import './CountryList.css';

const CountryList = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="country-list-container">
      <div className="country-list">
        {filteredCountries.map(country => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
