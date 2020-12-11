import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSubmit, query, setQuery }) => {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper-search">
        <div className="icon">
          <FaSearch />
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search for movies..."
        />
      </div>
    </form>
  );
};

export default Search;
