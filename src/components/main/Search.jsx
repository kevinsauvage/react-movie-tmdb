import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSubmit, query, setQuery }) => {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper-search">
        <div className="icon">
          <FaSearch fill="var(--color-pink)" />
        </div>
        <input
          value={query}
          onChange={(e) => {
            let value = e.target.value;
            setQuery(value);
          }}
          className="search-input"
          type="text"
          placeholder="Search for movies..."
        />
      </div>
      <p>Hi! Mike</p>
    </form>
  );
};

export default Search;
