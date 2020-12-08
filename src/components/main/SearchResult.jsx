import React from "react";
import MovieCard from "../main/MovieCard";

const SearchResult = ({ searchResult, handleCardClickShow }) => {
  return searchResult.map((movie) => {
    return (
      <div className="search-movie-card">
        <MovieCard movie={movie} handleCardClickShow={handleCardClickShow} />
      </div>
    );
  });
};

export default SearchResult;
