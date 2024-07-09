import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CountryList.css";

const CountryList = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCountries.map((country) => (
    <Card key={country.cca3} country={country} />
  ));
};

export default CountryList;
