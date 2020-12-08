import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";

const Header = () => {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState(false);
  const [singleMovie, setSingleMovie] = useState([]);
  const [queryId, setQueryID] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [categoryResult, setCategoryResult] = useState([]);
  const [page, setPage] = useState(1);
  const [genreId, setGenreId] = useState(null);
  const [categorys, setCategorys] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";

  // Fetch Category
  const fetchCategorys = async (e) => {
    const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const genres = data.genres;
    setCategorys(genres);
  };
  useEffect(() => {
    fetchCategorys();
  }, []);

  // Handle the search for movie and display it
  const fetchMoviesSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    const data = await response.json();
    const results = data.results;
    setSearchResult((prevSearchResult) => [...prevSearchResult, ...results]);
    setDisplaySearch(true);
    setPage(page + 1);
    setDisplayCategory(false);
    setQueryID(null);
    setCategoryName("");
  };

  // Load more movies handler
  const loadMoreHandlerFromSearch = async () => {
    let newPage = page + 1;
    setPage(newPage);
    if (queryId !== null) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`;
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setCategoryResult((prevSearchResult) => [
        ...prevSearchResult,
        ...results,
      ]);
    } else {
      fetchMoviesSearch();
    }
  };

  // Fetch single movie by id to display movie card detail
  const fetchSingleMovieWithMovieId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${queryId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setSingleMovie(data);
  };

  // Fetch by category
  const fetchByCategory = async (e) => {
    const categoryName = e.target.dataset.name;
    setCategoryName(categoryName);
    const genre = e.target.dataset.id;
    setGenreId(genre);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&with_genres=${genre}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setCategoryResult(results);
    setDisplayCategory(true);
    setDisplaySearch(true);
    setQueryID("");
  };

  // Handle the display of card movie detail when click on movie card
  const handleCardClickShow = (e) => {
    const att = e.target.getAttribute("data-key");
    setQueryID(att);
    fetchSingleMovieWithMovieId();
    setDisplay(true);
  };

  // Close the movie detail card and come back to home page
  const closeMovieDetailHandler = () => {
    setDisplay(false);
  };

  // Handler for home btn
  const handleBackhome = () => {
    setPage(1);
    setDisplaySearch(false);
  };

  // Reset Counter Page to start at 1 when clicking on category
  const resetCounterPage = () => {
    setPage(1);
  };

  // Getting the query from input in search
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <>
        <SideBar
          handleCardClickRemove={closeMovieDetailHandler}
          handleBackhome={handleBackhome}
          fetchByCategory={fetchByCategory}
          resetCounterPage={resetCounterPage}
          categorys={categorys}
        />
        <Main
          categoryName={categoryName}
          closeMovieDetailHandler={closeMovieDetailHandler}
          handleCardClickShow={handleCardClickShow}
          display={display}
          singleMovie={singleMovie}
          query={query}
          fetchMoviesSearch={fetchMoviesSearch}
          handleSearch={handleSearch}
          displaySearch={displaySearch}
          displayCategory={displayCategory}
          searchResult={searchResult}
          loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
          categoryResult={categoryResult}
        />
      </>
    </header>
  );
};

export default Header;
