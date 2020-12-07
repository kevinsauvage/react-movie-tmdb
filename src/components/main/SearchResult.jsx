import React from "react";
import MovieCard from "../main/MovieCard";

const SearchResult = ({ searchResult }) => {
  console.log(searchResult);
  return searchResult.map((movie) => {
    return (
      <div className="search-movie-card">
        <MovieCard movie={movie} />
      </div>
    );
  });
};

export default SearchResult;
