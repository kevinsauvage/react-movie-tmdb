import React from "react";
import MovieCard from "../main/MovieCard";
import Loader from "react-loader-spinner";

const SearchResult = ({
  searchResult,
  handleCardClickShow,
  isExecuted,
  setIsExecuted,
  sectionName,
}) => {
  setTimeout(() => {
    setIsExecuted(false);
  }, 4000);

  if (searchResult.length === 0) {
    if (isExecuted) {
      return (
        <div className="noResult">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      );
    } else {
      return (
        <div className="noResult">
          Nothing was found for "{sectionName.split('"').join(" ")}"
        </div>
      );
    }
  }
  if (searchResult.length !== 0) {
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
