import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Main from "./Main";

const Header = () => {
  // query from user input
  const [query, setQuery] = useState("");
  // handle the display of the card detail movie show
  const [display, setDisplay] = useState(false);
  // store the result of the fetch of a single movie when user click on movie card
  const [singleMovie, setSingleMovie] = useState([]);
  // Movie id to fetch the single movie
  const [queryId, setQueryID] = useState("");
  // set page to fetch
  const [page, setPage] = useState(1);
  // store genre id of movie category to fetch and store the movies
  const [genreId, setGenreId] = useState(null);
  // fetch each category and store them into array to display them in sidebar
  const [categorys, setCategorys] = useState([]);
  // Toggle the opening and closing of hamburger menu
  const [openMenuHamb, setOpenMenuHamb] = useState(false);
  // Array of movie that we fetch
  const [movies, setMovies] = useState([]);
  // Section name string
  const [sectionName, setSectionName] = useState("");
  const [isExecuted, setIsExecuted] = useState(true);

  // Set the display true to use right fetch url
  const [displaySortResults, setDisplaySortResults] = useState(false);
  const [displaySeeAll, setDisplaySeeAll] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displaySimilar, setDisplaySimilar] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  // Fetch Categorys for navigation sidebar
  const fetchCategorys = async (e) => {
    const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const genres = data.genres;
    setCategorys(genres);
  };

  // Fetch at first render the categorys
  useEffect(() => {
    fetchCategorys();
  }, []);

  // Handle the search for movie and display it
  const fetchMoviesSearch = async () => {
    if (query.length === 0) {
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayCategory(false);
    setDisplaySortResults(false);
    setDisplay(false);
    setIsExecuted(true);
    setSectionName(query);
    setPage(1);
    setDisplaySearch(true);
  };

  // fetch by att 'popular' or 'top rated'
  const fetchByAtt = async (att) => {
    const url = `https://api.themoviedb.org/3/movie/${att}?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayCategory(false);
    setDisplaySortResults(false);
    setDisplaySearch(false);
    setIsExecuted(true);
    setSectionName(att);
    setPage(1);
    setDisplaySeeAll(true);
  };

  // Load more movies handler
  const loadMoreHandlerFromSearch = async () => {
    const url = displayCategory
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${
          page + 1
        }&with_genres=${genreId}`
      : displaySearch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
          page + 1
        }&include_adult=false`
      : displaySortResults
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sectionName}&include_adult=false&include_video=false&page=${
          page + 1
        }`
      : displaySeeAll
      ? `https://api.themoviedb.org/3/movie/${sectionName}?api_key=${API_KEY}&language=en-US&page=${
          page + 1
        }`
      : displaySimilar
      ? `https://api.themoviedb.org/3/movie/${
          singleMovie.id
        }/similar?api_key=${API_KEY}&language=en-US&page=${page + 1}`
      : null;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies((prevSearchResult) => [...prevSearchResult, ...results]);
    setPage(page + 1);
  };

  // Fetch single movie by id to display movie card detail
  const fetchSingleMovieWithMovieId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${queryId}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await fetch(url);
    const data = await response.json();
    setSingleMovie(data);
  };

  // Fetch by category
  const fetchByCategory = async (name, id) => {
    // No fetch if clicking the same category
    if (sectionName === name) {
      return;
    }
    setGenreId(id);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplay(false);
    setOpenMenuHamb(false);
    setDisplaySearch(false);
    setDisplaySortResults(false);
    setIsExecuted(true);

    setPage(1);
    setSectionName(name);
    setDisplayCategory(true);
  };

  // Fetct to sort by
  const fetchBy = async (att) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${att}&include_adult=false&include_video=false&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayCategory(false);
    setIsExecuted(true);

    setDisplaySearch(false);
    setSectionName(att);
    setPage(1);
    setDisplaySortResults(true);
  };

  const fetchSimilarMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${singleMovie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayCategory(false);
    setDisplaySortResults(false);
    setDisplay(false);
    setSectionName(`"${singleMovie.title}" Similar Movies`);
    setDisplaySearch(false);
    setIsExecuted(true);
    setDisplaySimilar(true);
    setPage(1);
  };

  // Handle the display of card movie detail when click on movie card
  const handleCardClickShow = (e) => {
    const att = e.target.getAttribute("data-key");
    setQueryID(att);
    setDisplay(true);
  };

  // Handle the back home when clicking to logo
  const handleBackHome = () => {
    // set to true the spinner loader
    setIsExecuted(true);

    setDisplayCategory(false);
    setDisplaySearch(false);
    setDisplaySortResults(false);
    setDisplay(false);
    setDisplaySeeAll(false);
    setOpenMenuHamb(false);
    setDisplaySimilar(false);
    setSectionName("");
  };

  return (
    <header className="header">
      <>
        <SideBar
          fetchByCategory={fetchByCategory}
          categorys={categorys}
          openMenuHamb={openMenuHamb}
          setDisplay={setDisplay}
          handleBackHome={handleBackHome}
          fetchBy={fetchBy}
          setOpenMenuHamb={setOpenMenuHamb}
          sectionName={sectionName}
        />
        <Main
          isExecuted={isExecuted}
          setIsExecuted={setIsExecuted}
          displaySimilar={displaySimilar}
          fetchSimilarMovies={fetchSimilarMovies}
          sectionName={sectionName}
          movies={movies}
          handleBackHome={handleBackHome}
          displaySortResults={displaySortResults}
          setDisplay={setDisplay}
          setPage={setPage}
          setDisplaySearch={setDisplaySearch}
          setQuery={setQuery}
          setOpenMenuHamb={setOpenMenuHamb}
          openMenuHamb={openMenuHamb}
          fetchSingleMovieWithMovieId={fetchSingleMovieWithMovieId}
          handleCardClickShow={handleCardClickShow}
          display={display}
          singleMovie={singleMovie}
          query={query}
          fetchMoviesSearch={fetchMoviesSearch}
          displaySearch={displaySearch}
          displayCategory={displayCategory}
          loadMoreHandlerFromSearch={loadMoreHandlerFromSearch}
          fetchByAtt={fetchByAtt}
          displaySeeAll={displaySeeAll}
        />
      </>
    </header>
  );
};

export default Header;
