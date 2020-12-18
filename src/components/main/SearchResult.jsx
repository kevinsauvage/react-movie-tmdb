import React, { useContext } from "react";
import MovieCard from "../main/MovieCard";
import { AppContext } from "../../Context/AppContext";
import Loader from "react-loader-spinner";

const SearchResult = ({ handleCardClickShow }) => {
  const props = useContext(AppContext);

  setTimeout(() => {
    props.setIsExecuted(false);
  }, 4000);

  if (props.movies.length === 0) {
    if (props.isExecuted) {
      return (
        <div className="noResult">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      );
    } else {
      return (
        <div className="noResult">
          Nothing was found for "{props.sectionName.split('"').join(" ")}"
        </div>
      );
    }
  }
  if (props.movies.length !== 0) {
    return (
      <>
        {props.movies.map((movie) => (
          <div key={movie.id} className="search-movie-card">
            <MovieCard
              handleCardClickShow={handleCardClickShow}
              movie={movie}
            />
          </div>
        ))}
      </>
    );
  }
};

export default SearchResult;
