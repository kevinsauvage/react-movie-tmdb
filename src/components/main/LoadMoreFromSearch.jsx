import React from "react";

const LoadMore = ({ loadMoreHandlerFromSearch }) => {
  return (
    <div className="load-more-btn" onClick={loadMoreHandlerFromSearch}>
      Load More
    </div>
  );
};

export default LoadMore;
