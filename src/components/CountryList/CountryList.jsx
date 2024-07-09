import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import "./CountryList.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //       const resp = await fetch("https://restcountries.com/v3.1/all");
  //       if (!resp.ok) {
  //         throw new Error("Failed to fetch countries");
  //       }
  //       const data = await resp.json();
  //       setCountries(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   getCountries();
  // }, []);

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

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCountries.map((country) => (
        <Card key={country.cca3} country={country} />
      ))}
    </>
  );
};

export default CountryList;
