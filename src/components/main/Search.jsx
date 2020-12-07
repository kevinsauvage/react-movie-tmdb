import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearch, handleSubmit, query }) => {
  const [active, setActive] = useState(false);

  const toggleClass = (e) => {
    e.preventDefault();
    const currentState = active;
    setActive({ active: !currentState });
  };

  return (
    <form className="search" onClick={toggleClass} onSubmit={handleSubmit}>
      <div className="icon">
        <FaSearch />
      </div>
      <input
        value={query}
        onChange={handleSearch}
        className="search-input"
        type="text"
        placeholder="Search for songs, artirts etc..."></input>
    </form>
  );
};

export default Search;
