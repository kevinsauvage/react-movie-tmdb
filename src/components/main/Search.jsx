import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearch, handleSubmit, query }) => {
  const [active, setActive] = useState(false);
  // toggle class to expend search bar to full width
  const toggleClass = (e) => {
    e.preventDefault();
    const currentState = active;
    setActive({ active: !currentState });
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper-search">
        <div className="icon" onClick={toggleClass}>
          <FaSearch onClick={toggleClass} />
        </div>
        <input
          value={query}
          onChange={handleSearch}
          className="search-input"
          type="text"
          placeholder="Search for movies..."
        />
      </div>
    </form>
  );
};

export default Search;
