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
  // handling display of the serach result
  const [displaySearch, setDisplaySearch] = useState(false);
  // handling witch search array to display (search result or category result)
  const [displayCategory, setDisplayCategory] = useState(false);
  // handling witch search array to display (search result or category result)
  const [searchResult, setSearchResult] = useState([]);
  // Store movie of category clicked
  const [categoryResult, setCategoryResult] = useState([]);
  // set page to fetch
  const [page, setPage] = useState(1);
  // store genre id of movie category to fetch and store the movies
  const [genreId, setGenreId] = useState(null);
  // fetch each category and store them into array to display them in sidebar
  const [categorys, setCategorys] = useState([]);
  // storing single category name of category clicked to display in search result
  const [categoryName, setCategoryName] = useState("");
  // Toggle the opening and closing of hamburger menu
  const [openMenuHamb, setOpenMenuHamb] = useState(false);
  // Sort by result array
  const [sortByResults, setSortByResults] = useState([]);
  // Set the display to the sort result fetch
  const [displaySortResults, setDisplaySortResults] = useState(false);
  // set the name of the sort by parameter using dataset
  const [sortName, setSortName] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  // Fetch Category
  const fetchCategorys = async (e) => {
    const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const genres = data.genres;
    // Getting each tagory and store them inside categorys
    setCategorys(genres);
    setQuery("");
  };
  // Fetch at first render the categorys
  useEffect(() => {
    fetchCategorys();
  }, []);

  // Handle the search for movie and display it
  const fetchMoviesSearch = async () => {
    setDisplay(false);
    // API CALL
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    const results = data.results;
    // Store fetch result of search
    setSearchResult(results);
    // display the search result
    setDisplaySearch(true);
    // Removing the category search result to desplay the search result input
    setDisplayCategory(false);
    // Reinintializing the query id of movie
    setDisplaySortResults(false);
    //reset query ID
    setQueryID(null);
    // reinitializing the category in order to stop display it
    setCategoryName("");
    // reinitialinzing search category result
    setCategoryResult([]);
    //rester the result of sorting
    setSortByResults([]);
    // Set the page to 1 for load more btn handler
    setPage(1);
  };

  // Load more movies handler
  const loadMoreHandlerFromSearch = async () => {
    // Switching between fetch depending of the category fetch or search input search
    if (displayCategory) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${
        page + 1
      }&with_genres=${genreId}`;
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      // Storing new result of fetch with the last result
      setCategoryResult((prevSearchResult) => [
        ...prevSearchResult,
        ...results,
      ]);
      setPage(page + 1);
      console.log(url);
    }

    if (displaySearch) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
        page + 1
      }&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      // Storing new result of fetch with the last result
      setSearchResult((prevSearchResult) => [...prevSearchResult, ...results]);
      setPage(page + 1);
    }

    if (displaySortResults === true) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortName}&include_adult=false&include_video=false&page=${
        page + 1
      }`;
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setSortByResults((prevResults) => [...prevResults, ...results]);
      setPage(page + 1);
    }
  };

  // Fetch single movie by id to display movie card detail
  const fetchSingleMovieWithMovieId = async () => {
    const url = `https://api.themoviedb.org/3/movie/${queryId}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    // Storing single movie fetch
    setSingleMovie(data);
  };

  // Fetch by category
  const fetchByCategory = async (name, id) => {
    // No fetch if clicking the same category
    if (categoryName === name) {
      return;
    }
    setSearchResult([]);
    // Reset sort by results for display btn
    setSortByResults([]);
    // Displaying the category results for display btn
    setDisplayCategory(true);
    // To display the result
    setDisplaySearch(false);
    // Reset the display of sort result
    setDisplaySortResults(false);
    // close menu hamb when clicking a link
    setOpenMenuHamb(false);
    // reset page to 1
    setPage(1);
    // Set display of carddetail to false
    setDisplay(false);
    // Reinitialize query
    setQuery("");
    // Storing category name clicked in order to display it
    setCategoryName(name);
    // storing categoyr clicked id in order to fetch
    setGenreId(id);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    // Storing the results of movie by category clicked
    setCategoryResult(results);
    // Reinitialize the search result input to empty array
  };

  // Fetct to sort by
  const fetchBy = async (att) => {
    setDisplayCategory(false);
    setDisplaySearch(false);
    setSortName(att);
    setDisplaySortResults(true);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${att}&include_adult=false&include_video=false&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    setSortByResults(results);
    setCategoryResult([]);
    setSearchResult([]);
    setQueryID("");
    setCategoryName("");
    setPage(1);
  };

  // Handle the display of card movie detail when click on movie card
  const handleCardClickShow = (e) => {
    // Displaying the movie detail card show
    setDisplay(true);
    const att = e.target.getAttribute("data-key");
    // getting query for data attribute to fetch the right movie
    setQueryID(att);
  };

  const handleBackHome = () => {
    setDisplayCategory(false);
    setDisplaySearch(false);
    setDisplaySortResults(false);
    setDisplay(false);
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
        />
        <Main
          displaySortResults={displaySortResults}
          sortByResults={sortByResults}
          setDisplay={setDisplay}
          setPage={setPage}
          setDisplaySearch={setDisplaySearch}
          setQuery={setQuery}
          setOpenMenuHamb={setOpenMenuHamb}
          openMenuHamb={openMenuHamb}
          fetchSingleMovieWithMovieId={fetchSingleMovieWithMovieId}
          categoryName={categoryName}
          handleCardClickShow={handleCardClickShow}
          display={display}
          singleMovie={singleMovie}
          query={query}
          fetchMoviesSearch={fetchMoviesSearch}
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
