import React from "react";
import Search from "../components/main/Search";
import Content from "../components/main/Content";
import CardDetail from "../components/main/CardDetail";
import SearchResult from "../components/main/SearchResult";
import LoadMoreFromSearch from "../components/main/LoadMoreFromSearch";

const Main = ({
  display,
  handleCardClickShow,
  singleMovie,
  query,
  fetchMoviesSearch,
  handleSearch,
  displaySearch,
  searchResult,
  closeMovieDetailHandler,
  loadMoreHandlerFromSearch,
  categoryResult,
  displayCategory,
  categoryName,
  fetchSingleMovieWithMovieId,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMoviesSearch();
  };

  return (
    <div className="main">
      {display ? (
        <CardDetail
          fetchSingleMovieWithMovieId={fetchSingleMovieWithMovieId}
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
        <>
          <div
            className="section-title main-section-title"
            style={{ paddingLeft: "15px" }}>
            {categoryName}
          </div>
          <div className="search-result-container">
            <SearchResult
              searchResult={displayCategory ? categoryResult : searchResult}
              handleCardClickShow={handleCardClickShow}
            />
            {searchResult.length === 0 ? null : (
              <LoadMoreFromSearch
                loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
              />
            )}
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
