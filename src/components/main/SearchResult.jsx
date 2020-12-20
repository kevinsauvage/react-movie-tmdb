import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../main/MovieCard";
import { AppContext } from "../../Context/AppContext";
import Loader from "react-loader-spinner";

const SearchResult = ({ handleCardClickShow }) => {
  const props = useContext(AppContext);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 100 >=
      document.body.offsetHeight
    ) {
      setIsFetching(true);
    }
  };

  const fetchMoreListItems = () => {
    setTimeout(() => {
      props.loadMoreHandlerFromSearch();
      setIsFetching(false);
    }, 1000);
  };

  if (props.isExecuted) {
    return (
      <div className="noResult">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
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
  if (props.movies.length === 0) {
    return (
      <div className="noResult">
        Nothing was found for "{props.sectionName.split('"').join(" ")}"
      </div>
    );
  }
};

export default SearchResult;
