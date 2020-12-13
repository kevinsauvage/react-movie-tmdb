import React from "react";
import MovieCard from "../main/MovieCard";

const SearchResult = ({ searchResult, handleCardClickShow }) => {
  if (searchResult.length === 0) {
    return (
      <div className="noResult">
        <p>No result</p>
      </div>
    );
  } else {
    return searchResult.map((movie) => {
      return (
        <div key={movie.id} className="search-movie-card">
          <MovieCard movie={movie} handleCardClickShow={handleCardClickShow} />
        </div>
      );
    });
  }
};

export default SearchResult;
