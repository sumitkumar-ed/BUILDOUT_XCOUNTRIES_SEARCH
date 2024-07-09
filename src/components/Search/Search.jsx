import React from 'react';
import './Search.css';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for countries"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
