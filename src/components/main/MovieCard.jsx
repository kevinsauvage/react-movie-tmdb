import React from "react";
import "react-multi-carousel/lib/styles.css";

const MovieCard = ({ movie, handleCardClickShow }) => {
  let backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`;

  return (
    <div
      key={movie.id}
      data-key={movie.id}
      onClick={handleCardClickShow}
      className="card-container"
      style={{
        backgroundImage: backgroundImage,
        position: "relative",
        height: "100%",
        width: "100%",
      }}>
      <div className="title">
        <h3>{movie.original_title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
