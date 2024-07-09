import React, { useState } from 'react';
import Search from './components/Search/Search';
import CountryList from "./components/CountryList/CountryList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CountryList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
