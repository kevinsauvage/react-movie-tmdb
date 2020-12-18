import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const LoadMore = () => {
  const props = useContext(AppContext);

  return (
    <div className="load-more-btn" onClick={props.loadMoreHandlerFromSearch}>
      <button>Load More</button>
    </div>
  );
};

export default LoadMore;
