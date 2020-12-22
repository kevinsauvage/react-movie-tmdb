import React, { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { AppContext } from "../../Context/AppContext";

const MovieCard = (movie) => {
  const props = useContext(AppContext);
  var backgroundImage = " ";

  if (movie) {
    if (movie.movie.poster_path === null) {
      backgroundImage = `url(https://www.featherliteladders.com/media/1286/image-not-available.jpg)`;
    } else {
      backgroundImage = `url(https://image.tmdb.org/t/p/w185/${movie.movie.poster_path})`;
    }
  }
  // Handle the display of card movie detail when click on movie card
  const handleCardClickShow = (e) => {
    props.setSingleMovie([]);
    const att = e.target.getAttribute("data-key");
    props.fetchSingleMovieWithMovieId(att);
    props.setDisplay(true);
    props.setClientY(e.screenY);
    props.setClientX(e.screenX);
  };

  return (
    <div
      key={movie.movie.id}
      data-key={movie.movie.id}
      onClick={(e) => {
        handleCardClickShow(e);
      }}
      className="card-container"
      style={{
        backgroundImage: backgroundImage,
        position: "relative",
        height: "100%",
      }}>
      <div
        data-key={movie.movie.id}
        onClick={(e) => {
          handleCardClickShow(e);
        }}
        className="detail-card-hover">
        <div
          data-key={movie.movie.id}
          onClick={(e) => {
            handleCardClickShow(e);
          }}>
          <p
            data-key={movie.movie.id}
            onClick={(e) => {
              handleCardClickShow(e);
            }}
            className="title-card-hover">
            {movie.movie.title.length < 10
              ? movie.movie.title
              : movie.movie.title.substring(0, 20).trim() + "..."}
          </p>
          <p
            className="release"
            data-key={movie.movie.id}
            onClick={(e) => {
              handleCardClickShow(e);
            }}>
            {movie.movie.release_date}
          </p>
        </div>
        <div
          data-key={movie.movie.id}
          onClick={(e) => {
            handleCardClickShow(e);
          }}
          className="vote-card-detail">
          {movie.movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
