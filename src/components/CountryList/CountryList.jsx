import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import "./CountryList.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        if (!resp.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await resp.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        {filteredCountries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default CountryList;
