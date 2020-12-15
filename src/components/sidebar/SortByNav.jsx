import React from "react";

const SortByNav = ({ fetchBy, setOpenMenuHamb }) => {
  return (
    <div className="sort-by">
      <h2 className="section-title">SORT BY</h2>
      <ul className="sort-by-nav">
        <li
          data-name="popularity.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Popularity desc
        </li>
        <li
          data-name="vote_average.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Vote average
        </li>
        <li
          data-name="vote_count.desc"
          onClick={(e) => {
            fetchBy(e.target.dataset.name);
            setOpenMenuHamb(false);
          }}>
          Vote Count
        </li>
      </ul>
    </div>
  );
};

export default SortByNav;
