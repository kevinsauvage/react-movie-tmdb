import React, { useState, useEffect } from "react";
import Search from "../components/main/Search";
import Content from "../components/main/Content";
import CardDetail from "../components/main/CardDetail";
import SearchResult from "../components/main/SearchResult";
import Page from "../components/main/Page";

const Main = ({
  display,
  handleCardClickShow,
  singleMovie,
  query,
  fetchMoviesSearch,
  handleSearch,
  handlePageChange,
  displaySearch,
  searchResult,
  handleLogoClicked,
  closeMovieDetailHandler,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMoviesSearch();
  };

  return (
    <div className="main">
      {display ? (
        <CardDetail
          singleMovie={singleMovie}
          closeMovieDetailHandler={closeMovieDetailHandler}
        />
      ) : null}

      <Search
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        query={query}
      />
      {displaySearch ? (
        <div className="search-result-container">
          <SearchResult
            searchResult={searchResult}
            handleLogoClicked={handleLogoClicked}
          />
          <Page handlePageChange={handlePageChange} />
        </div>
      ) : (
        <Content handleCardClickShow={handleCardClickShow} />
      )}
    </div>
  );
};

export default Main;
