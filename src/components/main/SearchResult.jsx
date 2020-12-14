import React from "react";
import MovieCard from "../main/MovieCard";
import Loader from "react-loader-spinner";

const SearchResult = ({ searchResult, handleCardClickShow }) => {
  if (searchResult.length === 0) {
    return (
      <div className="noResult">
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
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
