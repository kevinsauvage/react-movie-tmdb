import React from "react";
import ReactPlayer from "react-player/youtube";
import { FaTimesCircle } from "react-icons/fa";

const youtubePlayer = ({ singleMovie, SetVideoIsOpen }) => {
  return (
    <div className="video-player-container">
      <ReactPlayer
        url={
          "https://www.youtube.com/watch?v=" + singleMovie.videos.results[0].key
        }
        controls={true}
        width="100%"
        height="100%"
      />
      <div className="icon-wrapper">
        <div className="icon-close-video" onClick={() => SetVideoIsOpen(false)}>
          <FaTimesCircle size="30px" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default youtubePlayer;
