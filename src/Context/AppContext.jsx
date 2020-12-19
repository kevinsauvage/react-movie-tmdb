import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [categorys, setCategorys] = useState([]); // fetch each category and store them into array to display them in sidebar
  const [singleMovie, setSingleMovie] = useState([]); // store the result of the fetch of a single movie when user click on movie card
  const [query, setQuery] = useState(""); // query from user input
  const [movies, setMovies] = useState([]); // Array of movie that we fetch
  const [displaySearch, setDisplaySearch] = useState(false); // Set the display true to use right fetch url
  const [openMenuHamb, setOpenMenuHamb] = useState(false); // Toggle the opening and closing of hamburger menu
  const [display, setDisplay] = useState(false); // handle the display of the card detail movie show
  const [sectionName, setSectionName] = useState(""); // Section name string
  const [isExecuted, setIsExecuted] = useState(true); // Setting the Spinner loader
  const [page, setPage] = useState(1); // set page to fetch
  const [genreId, setGenreId] = useState(null); // store genre id of movie category to fetch and store the movies
  const [displayedSearchName, setDisplayedSearchName] = useState(""); // Set the name of the fetch to load more content

  // Get the name of categorys and display them on sidebar
  const fetchCategorys = async (e) => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const genres = await data.genres;
    setCategorys(genres);
  };

  // Fetch at first render the categorys
  useEffect(() => {
    fetchCategorys();
  }, []);

  // Fetch single movie by id to display movie card detail
  const fetchSingleMovieWithMovieId = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await fetch(url);
    const data = await response.json();
    setSingleMovie(data);
  };

  // Handle the search for movie and display it
  const fetchMoviesSearch = async () => {
    setIsExecuted(true);
    if (query.length !== 0) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await response.json();
      const results = data.results;
      setMovies(results);
      setSectionName(query);
      setDisplayedSearchName("search");
      setDisplaySearch(true);
      setPage(1);
    }
  };
  const fetchByAtt = async (att) => {
    setIsExecuted(true);
    const url = `https://api.themoviedb.org/3/movie/${att}?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayedSearchName("seeAll");
    setDisplaySearch(true);
    setSectionName(att);
    setPage(1);
  };

  // Fetch by category nav link
  const fetchByCategory = async (name, id) => {
    // No fetch if clicking the same category
    if (sectionName === name) {
      return;
    }
    setGenreId(id);
    setIsExecuted(true);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplayedSearchName("category");
    setOpenMenuHamb(false);
    setDisplaySearch(true);
    setSectionName(name);
    setPage(1);
  };

  // Fetct to sort by
  const fetchBy = async (att) => {
    setIsExecuted(true);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${att}&include_adult=false&include_video=false&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplaySearch(true);
    setSectionName(att);
    setDisplayedSearchName("sort");
    setOpenMenuHamb(false);
    setPage(1);
  };

  // Fetch siimilar movie by clicking on btn in card detail
  const fetchSimilarMovies = async () => {
    setIsExecuted(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${singleMovie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    const results = data.results;
    setMovies(results);
    setDisplay(false);
    setSectionName(`"${singleMovie.title}" Similar Movies`);
    setDisplaySearch(true);
    setPage(1);
    setDisplayedSearchName("similar");
  };

  // Load more movies handler
  const loadMoreHandlerFromSearch = async (e) => {
    const url =
      displayedSearchName === "category"
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${
            page + 1
          }&with_genres=${genreId}`
        : displayedSearchName === "search"
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
            page + 1
          }&include_adult=false`
        : displayedSearchName === "sort"
        ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sectionName}&include_adult=false&include_video=false&page=${
            page + 1
          }`
        : displayedSearchName === "seeAll"
        ? `https://api.themoviedb.org/3/movie/${sectionName}?api_key=${API_KEY}&language=en-US&page=${
            page + 1
          }`
        : displayedSearchName === "similar"
        ? `https://api.themoviedb.org/3/movie/${
            singleMovie.single.id
          }/similar?api_key=${API_KEY}&language=en-US&page=${page + 1}`
        : null;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setMovies((prevSearchResult) => [...prevSearchResult, ...results]);
    setPage(page + 1);
  };

  // Handle the back home when clicking on logo
  const handleBackHome = () => {
    setIsExecuted(true);
    setDisplaySearch(false);
    setDisplay(false);
    setOpenMenuHamb(false);
    setSectionName("");
  };

  return (
    <Provider
      value={{
        categorys,
        singleMovie,
        displaySearch,
        movies,
        openMenuHamb,
        display,
        sectionName,
        isExecuted,
        query,
        fetchSingleMovieWithMovieId,
        fetchMoviesSearch,
        setOpenMenuHamb,
        setPage,
        setDisplaySearch,
        setDisplay,
        handleBackHome,
        fetchByAtt,
        setQuery,
        setIsExecuted,
        fetchBy,
        fetchByCategory,
        loadMoreHandlerFromSearch,
        fetchSimilarMovies,
      }}>
      {props.children}
    </Provider>
  );
};
