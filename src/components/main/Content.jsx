import React, { useState, useEffect } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";

const Content = ({ handleCardClickShow }) => {
  // Fetching top favorite movies
  const [popMovies, setpopMovies] = useState([]);

  let page = "1";
  const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(url);
      const data = await response.json();
      setpopMovies(data.results);
    }
    getMovies();
  }, []);

  // Fetching top rated
  const [topMovies, settopMovies] = useState([]);
  const topUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&${page}`;

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(topUrl);
      const data = await response.json();
      settopMovies(data.results);
    }
    getMovies();
  }, []);

  // Fetching now Playing
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&${page}`;

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(nowPlayingUrl);
      const data = await response.json();
      setnowPlayingMovies(data.results);
    }
    getMovies();
  }, []);

  return (
    <div className="content">
      <SectionTitle title="Popular Movies" />
      <Carusel handleCardClickShow={handleCardClickShow} movies={popMovies} />

      <SectionTitle title="Top Rated Movies" />
      <Carusel movies={topMovies} handleCardClickShow={handleCardClickShow} />
    </div>
  );
};

export default Content;
