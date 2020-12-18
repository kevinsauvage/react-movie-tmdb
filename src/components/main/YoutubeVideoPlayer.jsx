import React, { useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { FaSadTear, FaTimesCircle } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";

const YoutubePlayer = ({ SetVideoIsOpen }) => {
  const props = useContext(AppContext);

  if (props.singleMovie.videos.results.length !== 0) {
    return (
      <div className="video-player-container">
        <ReactPlayer
          url={
            "https://www.youtube.com/watch?v=" +
            props.singleMovie.videos.results[0].key
          }
          controls={true}
          width="100%"
          height="100%"
        />
        <div className="icon-wrapper">
          <div
            className="icon-close-video"
            onClick={() => SetVideoIsOpen(false)}>
            <FaTimesCircle size="30px" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-trailer-container">
        <div className="sad-icon-container">
          <FaSadTear size="50px" />
        </div>
        <div className="icon-close-video" onClick={() => SetVideoIsOpen(false)}>
          <FaTimesCircle size="30px" style={{ cursor: "pointer" }} />
        </div>
        <div className="no-trailer-text-container">
          <p>Sorry, no trailer was found...</p>
        </div>
      </div>
    );
  }
};

export default YoutubePlayer;
