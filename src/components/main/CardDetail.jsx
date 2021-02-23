import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import YoutubePlayer from "../main/YoutubeVideoPlayer";
import { AppContext } from "../../Context/AppContext";

const CardDetail = () => {
  const props = useContext(AppContext);
  const [videoIsOpen, SetVideoIsOpen] = useState(false);
  const arrGenre = props.singleMovie.genres; // GET THE GENRES FROM SINGLEMOVIE TO DISPLAY IN CARD DETAIL
  const background = `url(https://image.tmdb.org/t/p/w780/${props.singleMovie.backdrop_path})`; // SET THE BACKGROUND OF THE CARD DETAIL

  const style = {
    backgroundImage: background,
  };

  const handleClickFetchSimilar = () => {
    document.querySelector("body").classList.remove("overflow");
    props.fetchSimilarMovies();
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (e) => {
    document.querySelector("body").classList.remove("overflow");
    const name = e.target.dataset.name;
    const id = e.target.dataset.id;
    props.fetchByCategory(name, id);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.value === "gradient") {
      document.querySelector("body").classList.remove("overflow");
      props.setDisplay(false);
    }
  };

  return (
    <div className="card-detail" style={style}>
      <div className="gradient" onClick={handleClickOutside}>
        <div className="movie-detail-container">
          <div className="wrapper-shadow">
            <img
              src={`https://image.tmdb.org/t/p/w185/${props.singleMovie.poster_path}`}
              alt=""
              className="poster"
            />
            <div className="card-detail-text-wrapper">
              <div className="title-and-note">
                <h3>{props.singleMovie.original_title}</h3>
                <div className="note-container">
                  <FaStar size="14px" fill="var(--color-primary)" />
                  <span className="note">{props.singleMovie.vote_average}</span>
                </div>
              </div>
              <span className="release">{props.singleMovie.release_date}</span>
              <p className="movie-description">{props.singleMovie.overview}</p>
              <div className="genre-container">
                {arrGenre &&
                  arrGenre.map((genre) => (
                    <p
                      key={genre.id}
                      data-id={genre.id}
                      data-name={genre.name}
                      onClick={handleCategoryClick}
                      className="category-card-detail">
                      {genre.name} /
                    </p>
                  ))}
              </div>
              <div
                className="fetch-similar-btn"
                onClick={handleClickFetchSimilar}>
                Similar movies
              </div>
              <div
                onClick={() => {
                  SetVideoIsOpen(true);
                }}
                className="see-trailer-btn">
                Watch trailer
              </div>
            </div>
          </div>
          {videoIsOpen && <YoutubePlayer SetVideoIsOpen={SetVideoIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
