import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CountryList.css";

const CountryList = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetch
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Conditionally render content based on loading and error states
  if (isLoading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p>Error fetching countries: {error}</p>;
  }

  return filteredCountries.map((country) => (
    <Card key={country.cca3} country={country} />
  ));
};

export default CountryList;
