import React, { useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";

const Header = () => {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState(false);
  const [singleMovie, setSingleMovie] = useState([]);
  const [queryId, setQueryID] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);

  const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  // Handle the display of card movie detail when click on movie card
  const handleCardClickShow = (e) => {
    const att = e.target.getAttribute("data-key");
    setQueryID(att);
    setDisplay(true);
    fetchSingleMovieWithMovieId();
  };
  // Close the movie detail card and come back to home page
  const closeMovieDetailHandler = () => {
    setDisplay(false);
  };
  // handle page clicked on search result
  const handlePageChange = (e) => {
    let page = e.target.dataset.key;
    setPage(page);
    fetchMoviesSearch();
  };
  // Fetch single movie by id to display movie card detail
  const fetchSingleMovieWithMovieId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${queryId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setSingleMovie(data);
    console.log(data);
  };
  // Handler for home btn
  const handleBackhome = () => {
    setDisplaySearch(false);
  };
  // Handle the search for movie and display it
  const fetchMoviesSearch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSearchResult(data.results);
    setDisplaySearch(true);
  };
  // Getting the query from input in search
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const fetchByCategory = async (e) => {
    const genreId = e.target.dataset.id;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`;
    const response = await fetch(url);
    const data = await response.json();
    setSearchResult(data.results);
    setDisplaySearch(true);
    console.log(searchResult);
    console.log(displaySearch);
  };

  return (
    <header className="header">
      <>
        <SideBar
          handleCardClickRemove={closeMovieDetailHandler}
          handleBackhome={handleBackhome}
          fetchByCategory={fetchByCategory}
        />
        <Main
          closeMovieDetailHandler={closeMovieDetailHandler}
          handleCardClickShow={handleCardClickShow}
          display={display}
          singleMovie={singleMovie}
          query={query}
          fetchMoviesSearch={fetchMoviesSearch}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          displaySearch={displaySearch}
          searchResult={searchResult}
        />
      </>
    </header>
  );
};

export default Header;
