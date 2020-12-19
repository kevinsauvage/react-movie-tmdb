import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../main/MovieCard";
import { AppContext } from "../../Context/AppContext";
import Loader from "react-loader-spinner";

const SearchResult = ({ handleCardClickShow }) => {
  const props = useContext(AppContext);
  const [isBottom, setIsBottom] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // we use an empty array [] as the second parameter of useEffect, that tells the useEffect function to act like componentDidMount and only run onee time, when the component first mounts.

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 200 >=
      document.body.offsetHeight
    ) {
      setIsFetching(true);
      console.log("Bottom of page");
    }
  };

  const fetchMoreListItems = () => {
    setTimeout(() => {
      props.loadMoreHandlerFromSearch();
      setIsFetching(false);
    }, 1000);
  };

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
