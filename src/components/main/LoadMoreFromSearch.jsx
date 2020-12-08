import React from "react";

const LoadMore = ({ loadMoreHandlerFromSearch }) => {
  return (
    <div className="load-more-btn" onClick={loadMoreHandlerFromSearch}>
      <p>Load More</p>
    </div>
  );
};

export default LoadMore;
