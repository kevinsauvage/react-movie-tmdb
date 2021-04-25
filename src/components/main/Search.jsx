import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";

const Search = () => {
  const props = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.query === "") return;
    props.setDisplay(false);
    document.querySelector("body").classList.remove("overflow");
    props.fetchMoviesSearch();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper-search">
        <div className="icon">
          <FaSearch fill="var(--color-primary)" size={20} />
        </div>
        <input
          value={props.query}
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}
          className="search-input"
          type="text"
          placeholder="Search for movies..."
        />
      </div>
    </form>
  );
};

export default Search;
