import React from "react";

const LoadMore = ({ loadMoreHandlerFromSearch }) => {
  return (
    <div className="load-more-btn" onClick={loadMoreHandlerFromSearch}>
      <button>Load More</button>
    </div>
  );
};

export default LoadMore;
