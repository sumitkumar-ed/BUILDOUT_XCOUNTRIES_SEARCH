import React, { useEffect, useState } from "react";
import { getCountries } from "../../api/api";
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
        const data = await getCountries();
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
    <div className="country-list-container">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="country-list">
          {filteredCountries.map((country) => (
            // <Card key={country.cca3} country={country} />
            <div className="countryCard" key={country.cca3}>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="flag"
              />
              <p>{country.name.common}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryList;
