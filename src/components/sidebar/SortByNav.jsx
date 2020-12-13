import React, { useEffect } from "react";

const SortByNav = ({ sortByClickHandler }) => {
  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li data-name="popularity.desc" onClick={(e) => sortByClickHandler(e)}>
          Popularity desc
        </li>
        <li
          data-name="vote_average.desc"
          onClick={(e) => sortByClickHandler(e)}>
          Vote average
        </li>
        <li data-name="vote_count.desc" onClick={(e) => sortByClickHandler(e)}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
