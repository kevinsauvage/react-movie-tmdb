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
  searchResult,
  loadMoreHandlerFromSearch,
  categoryResult,
  displayCategory,
  categoryName,
  fetchSingleMovieWithMovieId,
  openMenuHamb,
  setOpenMenuHamb,
  setQuery,
  setPage,
  setDisplaySearch,
  setDisplay,
  setQueryID,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMoviesSearch();
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
      {displaySearch ? (
        <>
          <div className="section-title main-section-title">{categoryName}</div>
          <div className="search-result-container">
            <SearchResult
              // Display category result if true - display search result if false
              searchResult={displayCategory ? categoryResult : searchResult}
              handleCardClickShow={handleCardClickShow}
            />
            {/* display load more btn if search result contain at least 1 item*/}
            {searchResult.length === 0 ? null : (
              <LoadMoreFromSearch
                loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
              />
            )}
            {/* display load more btn if category result contain at least 1 item*/}
            {categoryResult.length === 0 ? null : (
              <LoadMoreFromSearch
                loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
              />
            )}
          </div>
        </>
      ) : (
        <Content handleCardClickShow={handleCardClickShow} />
      )}
    </div>
  );
};

export default Main;
