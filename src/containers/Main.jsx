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
  fetchSimilarMovies,
  displaySimilar,
  isExecuted,
  setIsExecuted,
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
      displaySeeAll === true ||
      displaySimilar === true
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
          fetchSimilarMovies={fetchSimilarMovies}
        />
      ) : null}
      {/* Search input */}
      <Search handleSubmit={handleSubmit} setQuery={setQuery} query={query} />
      {/* Display search result if true - display content if false */}
      {displayContentHandler() ? (
        <>
          <div className="search-result-container">
            <SearchResult
              searchResult={movies}
              handleCardClickShow={handleCardClickShow}
              isExecuted={isExecuted}
              setIsExecuted={setIsExecuted}
              sectionName={sectionName}
            />
            {/* Display btn load more if the api return something */}
            {movies.length !== 0 ? (
              <LoadMoreFromSearch
                loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
              />
            ) : null}
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
