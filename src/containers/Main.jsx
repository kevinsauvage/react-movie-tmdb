import React, { useContext } from "react";
import Search from "../components/main/Search";
import Content from "../components/main/Content";
import CardDetail from "../components/main/CardDetail";
import SearchResult from "../components/main/SearchResult";
import LoadMoreFromSearch from "../components/main/LoadMoreFromSearch";
import Logo from "../components/sidebar/Logo";
import { AppContext } from "../Context/AppContext";

import { FaBars } from "react-icons/fa";

const Main = () => {
  const props = useContext(AppContext);

  const displayContentHandler = () => {
    if (
      props.displaySearch === true ||
      props.displayCategory === true ||
      props.displaySortResults === true ||
      props.displaySeeAll === true ||
      props.displaySimilar === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="main">
      <div
        className="hamburger-icon"
        onClick={() => props.setOpenMenuHamb(!props.openMenuHamb)}>
        <FaBars />
      </div>
      <div
        className="logo"
        onClick={() => {
          props.setPage(1);
          props.setDisplaySearch(false);
          props.handleBackHome();
        }}>
        <Logo />
      </div>
      {/* Display card  detail if true */}
      {props.display ? <CardDetail /> : null}
      {/* Search input */}
      <Search />
      {/* Display search result if true - display content if false */}
      {displayContentHandler() ? (
        <>
          <div className="search-result-container">
            <SearchResult />
            {/* Display btn load more if the api return something */}
            {props.movies.length !== 0 ? <LoadMoreFromSearch /> : null}
          </div>
        </>
      ) : (
        <Content />
      )}
    </div>
  );
};

export default Main;
