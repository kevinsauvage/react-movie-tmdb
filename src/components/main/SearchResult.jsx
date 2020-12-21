import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../main/MovieCard";
import { AppContext } from "../../Context/AppContext";
import Loader from "react-loader-spinner";

const SearchResult = ({ handleCardClickShow }) => {
  const props = useContext(AppContext);
  const [isFetching, setIsFetching] = useState(false);

  // ADD EVENT LISTENER WHEN COMPONANT MOUNT
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // CALL FUNCTION FETCH MORE WHEN ISFETCHIN IS TRUE (BOTTOM OF THE PAGE)
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);
  // SET IF FETCHING TO TRUE WHEN AT BOTTOM OF PAGE
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 100 >=
      document.body.offsetHeight
    ) {
      setIsFetching(true);
    }
  };
  // CALL FETCH FUNCTION TO DISPLAY MORE ITEMS
  const fetchMoreListItems = () => {
    setTimeout(() => {
      props.loadMoreHandlerFromSearch();
      setIsFetching(false);
    }, 1000);
  };

  // DISPAY SPINNER LOADER WHEN STARTING TO FETCH
  if (props.isExecuted) {
    return (
      <div className="noResult">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
  // IF MOVIE WAS RETURN FROM API? DISPLAY THEM
  if (props.movies.length !== 0) {
    return (
      <>
        {props.movies.map((movie, index) => (
          <div key={movie.id + index} className="search-movie-card">
            <MovieCard
              handleCardClickShow={handleCardClickShow}
              movie={movie}
            />
          </div>
        ))}
      </>
    );
  }
  // DISPLAY NO RESULT IF NOTHING WAS RETURN FROM API
  if (props.movies.length === 0) {
    return (
      <div className="noResult">
        Nothing was found for "{props.sectionName.split('"').join(" ")}"
      </div>
    );
  }
};

export default SearchResult;
