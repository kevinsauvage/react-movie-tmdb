import React, { useState, useContext } from "react";
import { FaStar, FaTimesCircle } from "react-icons/fa";
import YoutubePlayer from "../main/YoutubeVideoPlayer";
import { AppContext } from "../../Context/AppContext";

const CardDetail = () => {
  const props = useContext(AppContext);
  const [videoIsOpen, SetVideoIsOpen] = useState(false);

  const background = `url(https://image.tmdb.org/t/p/w780/${props.singleMovie.backdrop_path})`;
  const style = {
    backgroundImage: background,
  };

  const fadeOut = (e) => {
    const cont = e.currentTarget.parentElement.parentElement;
    cont.style.animation = "fadeOut 600ms";

    setTimeout(() => {
      props.setDisplay(false);
    }, 500);
  };

  return (
    <div className="card-detail" style={style}>
      <div className="gradient">
        <div
          className="icon-movie-card-detail"
          onClick={(e) => {
            fadeOut(e);
          }}>
          <FaTimesCircle
            size="30px"
            style={{ cursor: "pointer" }}
            fill="var(--color-pink)"
          />
        </div>
        <div className="movie-detail-container">
          <img
            src={`https://image.tmdb.org/t/p/w185/${props.singleMovie.poster_path}`}
            alt=""
            className="poster"
          />
          <div className="card-detail-text-wrapper">
            <div className="title-and-note">
              <h3>{props.singleMovie.original_title}</h3>
              <div className="note-container">
                <FaStar />
                <span className="note">{props.singleMovie.vote_average}</span>
              </div>
            </div>
            <span className="release">{props.singleMovie.release_date}</span>
            <p className="movie-description">{props.singleMovie.overview}</p>

            <div
              className="fetch-similar-btn"
              onClick={() => {
                props.fetchSimilarMovies();
                window.scrollTo(0, 0);
              }}>
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
  );
};

export default CardDetail;
