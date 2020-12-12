import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSubmit, query, setQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    width: "400px",
    backgroundColor: "#313e5f9d",
  };
  return (
    <form
      className="search"
      onSubmit={handleSubmit}
      onMouseLeave={() => setIsOpen(false)}>
      <div className="wrapper-search">
        <div className="icon" onClick={() => setIsOpen(!isOpen)}>
          <FaSearch onClick={() => setIsOpen(!isOpen)} />
        </div>
        <input
          style={isOpen ? style : null}
          value={query}
          onChange={(e) => {
            if (e.target.value !== "") {
              setQuery(e.target.value);
            }
          }}
          className="search-input"
          type="text"
          placeholder="Search for movies..."
        />
      </div>
      <h2>TV ON DEMAND</h2>
      <p>Hi! Mike</p>
    </form>
  );
};

export default Search;
