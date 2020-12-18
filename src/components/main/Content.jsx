import React, { useState, useEffect, useContext } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";
import { AppContext } from "../../Context/AppContext";

const Content = () => {
  // Fetching top favorite movies
  const props = useContext(AppContext);

  const [popMovies, setpopMovies] = useState([]);
  const [topMovies, settopMovies] = useState([]);

  const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
  // Popular url
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  //top rated url
  const topUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(url);
      const data = await response.json();
      setpopMovies(data.results);
    }
    getMovies();
  }, []);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(topUrl);
      const data = await response.json();
      settopMovies(data.results);
    }
    getMovies();
  }, []);

  const seeAllHandler = (e) => {
    const att = e.target.dataset.key;
    props.fetchByAtt(att);
  };

  return (
    <div className="content">
      <div className="carusel-wrapper">
        <SectionTitle title="Popular Movies" />
        <Carusel movies={popMovies} />
        <div data-key="popular" className="see-all" onClick={seeAllHandler}>
          See all
        </div>
      </div>

      <div className="carusel-wrapper">
        <SectionTitle title="Top Rated Movies" />
        <Carusel movies={topMovies} />
        <div data-key="top_rated" className="see-all" onClick={seeAllHandler}>
          See all
        </div>
      </div>
    </div>
  );
};

export default Content;
