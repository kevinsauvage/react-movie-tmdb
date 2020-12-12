import React from "react";
import "react-multi-carousel/lib/styles.css";

const MovieCard = ({ movie, handleCardClickShow }) => {
  let backgroundImage = `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`;
  return (
    <div
      key={movie.id}
      data-key={movie.id}
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
        data-key={movie.id}
        onClick={(e) => {
          handleCardClickShow(e);
        }}
        className="detail-card-hover">
        <div>
          <p
            data-key={movie.id}
            onClick={(e) => {
              handleCardClickShow(e);
            }}
            className="title-card-hover">
            {movie.title}
          </p>
          <p
            data-key={movie.id}
            onClick={(e) => {
              handleCardClickShow(e);
            }}>
            {movie.release_date}
          </p>
        </div>
        <div className="vote-card-detail">{movie.vote_average}</div>
      </div>
    </div>
  );
};

export default MovieCard;
