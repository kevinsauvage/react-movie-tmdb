import React, { useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";

const CardDetail = ({
  singleMovie,
  closeMovieDetailHandler,
  fetchSingleMovieWithMovieId,
}) => {
  const background = `url(https://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path})`;
  const style = {
    backgroundImage: background,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
  };

  useEffect(() => {
    fetchSingleMovieWithMovieId();
  }, [singleMovie]);

  return (
    <div className="card-detail" style={style}>
      <div className="gradient">
        <div
          className="icon-movie-card-detail"
          onClick={closeMovieDetailHandler}>
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
              <span className="note">{singleMovie.vote_average}</span>
            </div>
            <span>{singleMovie.release_date}</span>
            <p className="movie-description">{singleMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
