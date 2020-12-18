import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";

import { AppContext } from "../../Context/AppContext";

const Search = () => {
  const props = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchMoviesSearch();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper-search">
        <div className="icon">
          <FaSearch fill="var(--color-pink)" />
        </div>
        <input
          value={props.query}
          onChange={(e) => {
            let value = e.target.value;
            props.setQuery(value);
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
