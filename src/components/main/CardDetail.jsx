import React, { useState, useContext } from "react";
import { FaStar, FaTimesCircle } from "react-icons/fa";
import YoutubePlayer from "../main/YoutubeVideoPlayer";
import { AppContext } from "../../Context/AppContext";

const CardDetail = () => {
  const props = useContext(AppContext);
  const [videoIsOpen, SetVideoIsOpen] = useState(false);
  // GET THE GENRES FROM SINGLEMOVIE TO DISPLAY IN CARD DETAIL
  const arrGenre = props.singleMovie.genres;
  // SET THE BACKGROUND OF THE CARD DETAIL
  const background = `url(https://image.tmdb.org/t/p/w780/${props.singleMovie.backdrop_path})`;
  const style = {
    backgroundImage: background,
  };

  const handleClickFetchSimilar = () => {
    props.fetchSimilarMovies();
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (e) => {
    props.fetchByCategory(e.target.dataset.name, e.target.dataset.id);
  };

  return (
    <div className="card-detail" style={style}>
      <div className="gradient">
        <div
          className="icon-movie-card-detail"
          onClick={(e) => props.setDisplay(false)}>
          <FaTimesCircle
            size="20px"
            style={{ cursor: "pointer" }}
            fill="var(--color-pink)"
          />
        </div>
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
                  <FaStar size="14px" fill="var(--color-pink)" />
                  <span className="note">{props.singleMovie.vote_average}</span>
                </div>
              </div>
              <span className="release">{props.singleMovie.release_date}</span>
              <p className="movie-description">{props.singleMovie.overview}</p>
              <div className="genre-container">
                {arrGenre
                  ? arrGenre.map((genre) => (
                      <p
                        key={genre.id}
                        data-id={genre.id}
                        data-name={genre.name}
                        onClick={handleCategoryClick}
                        className="category-card-detail">
                        {genre.name} /
                      </p>
                    ))
                  : null}
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
        </div>
        {videoIsOpen ? <YoutubePlayer SetVideoIsOpen={SetVideoIsOpen} /> : null}
      </div>
    </div>
  );
};

export default CardDetail;
