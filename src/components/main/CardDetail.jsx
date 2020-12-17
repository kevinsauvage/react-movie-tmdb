import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaTimesCircle } from "react-icons/fa";
import YoutubePlayer from "../main/YoutubeVideoPlayer";

const CardDetail = ({
  singleMovie,
  fetchSingleMovieWithMovieId,
  setDisplay,
  fetchSimilarMovies,
}) => {
  const [videoIsOpen, SetVideoIsOpen] = useState(false);
  const background = `url(https://image.tmdb.org/t/p/w780/${singleMovie.backdrop_path})`;
  const node = useRef();

  const style = {
    backgroundImage: background,
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    setDisplay(false);
  };
  console.log(node.current);

  useEffect(() => {
    fetchSingleMovieWithMovieId();
  }, []);

  const fadeOut = (e) => {
    const cont = e.currentTarget.parentElement.parentElement;
    cont.style.animation = "fadeOut 600ms";
    setTimeout(() => {
      setDisplay(false);
    }, 500);
  };

  return (
    <div className="card-detail" style={style} ref={node}>
      <div className="gradient">
        <div
          className="icon-movie-card-detail"
          onClick={(e) => {
            fadeOut(e);
          }}>
          <FaTimesCircle size="30px" style={{ cursor: "pointer" }} />
        </div>
        <div className="movie-detail-container">
          <img
            src={`https://image.tmdb.org/t/p/w185/${singleMovie.poster_path}`}
            alt=""
            className="poster"
          />
          <div className="card-detail-text-wrapper">
            <div className="title-and-note">
              <h3>{singleMovie.original_title}</h3>
              <div className="note-container">
                <FaStar />
                <span className="note">{singleMovie.vote_average}</span>
              </div>
            </div>
            <span className="release">{singleMovie.release_date}</span>
            <p className="movie-description">{singleMovie.overview}</p>

            <div className="fetch-similar-btn" onClick={fetchSimilarMovies}>
              Similar movies
            </div>
            <div
              onClick={() => SetVideoIsOpen(true)}
              className="see-trailer-btn">
              Watch trailer
            </div>
          </div>
        </div>
      </div>
      {videoIsOpen ? (
        <YoutubePlayer
          singleMovie={singleMovie}
          SetVideoIsOpen={SetVideoIsOpen}
        />
      ) : null}
    </div>
  );
};

export default CardDetail;
