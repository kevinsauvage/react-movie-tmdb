import React, { useState, useEffect, useContext } from "react";
import Carusel from "../main/Carusel";
import SectionTitle from "../main/SectionTitle";
import { AppContext } from "../../Context/AppContext";

const Content = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const props = useContext(AppContext);

  const [popMovies, setpopMovies] = useState([]);
  const [topMovies, settopMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setpopMovies(data.results);
    }
    getMovies();
  }, []);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      settopMovies(data.results);
    }
    getMovies();
  }, []);

  const seeAllHandler = (e) => {
    props.fetchByAtt(e.target.dataset.key);
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
