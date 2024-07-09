// import React, { useState } from 'react';
// import Search from './components/Search/Search';
// import CountryList from "./components/CountryList/CountryList";

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div className="App">
//       <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <CountryList searchQuery={searchQuery} />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="countryList">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div key={index} className="countryCard">
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
              />
              <p>{country.name.common}</p>
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default App;
