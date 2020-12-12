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
      <div className="title">
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
