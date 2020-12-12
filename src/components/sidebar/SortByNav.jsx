import React, { useEffect } from "react";

const SortByNav = ({ sortByClickHandler }) => {
  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li data-name="popularity.desc" onClick={sortByClickHandler}>
          Popularity desc
        </li>
        <li data-name="release_date.asc" onClick={sortByClickHandler}>
          Realease date asc
        </li>
        <li data-name="popularity.desc" onClick={sortByClickHandler}>
          Realease date desc
        </li>
        <li data-name="vote_average.desc" onClick={sortByClickHandler}>
          Vote average
        </li>
        <li data-name="vote_count.desc" onClick={sortByClickHandler}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
