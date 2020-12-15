import React from "react";
import Search from "../components/main/Search";
import Content from "../components/main/Content";
import CardDetail from "../components/main/CardDetail";
import SearchResult from "../components/main/SearchResult";
import LoadMoreFromSearch from "../components/main/LoadMoreFromSearch";
import Logo from "../components/sidebar/Logo";
import { FaBars } from "react-icons/fa";

const Main = ({
  display,
  handleCardClickShow,
  singleMovie,
  query,
  fetchMoviesSearch,
  displaySearch,
  loadMoreHandlerFromSearch,
  displayCategory,
  fetchSingleMovieWithMovieId,
  openMenuHamb,
  setOpenMenuHamb,
  setQuery,
  setPage,
  setDisplaySearch,
  setDisplay,
  displaySortResults,
  fetchByAtt,
  displaySeeAll,
  handleBackHome,
  movies,
  sectionName,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMoviesSearch();
  };

  const displayContentHandler = () => {
    if (
      displayCategory === true ||
      displaySearch === true ||
      displayCategory === true ||
      displaySortResults === true ||
      displaySeeAll === true
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
        onClick={() => setOpenMenuHamb(!openMenuHamb)}>
        <FaBars />
      </div>
      <div
        className="logo"
        onClick={() => {
          setPage(1);
          setDisplaySearch(false);
          handleBackHome();
        }}>
        <Logo />
      </div>
      {/* Display card  detail if true */}
      {display ? (
        <CardDetail
          fetchSingleMovieWithMovieId={fetchSingleMovieWithMovieId}
          singleMovie={singleMovie}
          setDisplay={setDisplay}
        />
      ) : null}
      {/* Search input */}
      <Search handleSubmit={handleSubmit} setQuery={setQuery} query={query} />
      {/* Display search result if true - display content if false */}
      {displayContentHandler() ? (
        <>
          <div className="section-title main-section-title">
            {sectionName
              .split(".")
              .join(" ")
              .split("_")
              .join(" ")
              .toUpperCase()}
          </div>
          <div className="search-result-container">
            <SearchResult
              // Display category result if true - display search result if false
              searchResult={movies}
              handleCardClickShow={handleCardClickShow}
            />
            <LoadMoreFromSearch
              loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
            />
          </div>
        </>
      ) : (
        <Content
          handleCardClickShow={handleCardClickShow}
          fetchByAtt={fetchByAtt}
        />
      )}
    </div>
  );
};

export default Main;
