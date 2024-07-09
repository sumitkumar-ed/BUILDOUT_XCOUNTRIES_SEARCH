import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./CountryList.css";

const CountryList = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(resp.data);
      } catch (err) {
        console.error(err);
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
